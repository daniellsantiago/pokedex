class App {
    constructor() {
        this.api = axios.create({baseURL: 'http://localhost:8080/api'});
        this.pokemons = [];
        this.tipos = [];

        this.setData();
        this.setHandlers();
    }
    
    setHandlers() {
        let buscaEl = document.querySelector("#busca");
        buscaEl.onkeyup = () => this.createTablePokemons();
        let select = document.querySelector("#busca > select");
        select.onchange = () => this.createTablePokemons();
    }

    createSelectTipos() {
        const select = document.querySelector("#busca > select");
        select.innerHTML = "";

        let tipos = "<option value='todos' selected>TODOS</option>";
        this.tipos.forEach(tipo => {
            tipos += `<option value = '${tipo.id}'>${tipo.nome}</option>`;
        });
        select.innerHTML = tipos;
    }

    createTablePokemons() {
        const tbody = document.querySelector("#lista > table > tbody");
        tbody.innerHTML = '';
        let pokemonsTr = '';

        const list = this.pokemonFilter();

        if(list.length === 0) {
            pokemonsTr =`<tr>
                            <td colspan="2" style="text-align:center;">
                                SEM REGISTROS
                            </td>
                        </tr>`;
        } else {
            list.forEach(pokemon => {
                pokemonsTr += `<tr>
                                    <td>#${pokemon.numeroDex}</td>
                                    <td class = 'nomePokemon'>${pokemon.nome}</td>
                                </tr>`;
            });
        }
        tbody.innerHTML  = pokemonsTr;
    }

    async setData() {
        try {
            let response = await this.api.get('/pokemon');
            this.pokemons = response.data;
        }catch(err) {
            console.error(err);
        }

        try {
            let response = await this.api.get('/tipo');
            this.tipos = response.data;
        }catch(err) {
            console.error(err);
        }

        this.createSelectTipos();
        this.createTablePokemons();
    }
    
    pokemonFilter() {
        let buscaEl = document.querySelector("#busca");
        const value = buscaEl.querySelector("input").value.trim();
        const tipoSelect = buscaEl.querySelector("select").value;
        const list = this.pokemons
            .filter(pokemon => {
                const nome = pokemon.nome.toUpperCase();
                return nome.indexOf(value.toUpperCase()) > -1;
            })
            .filter(pokemon => {
                const tipos = pokemon.tipos
                    .map(tipo => tipo.id);

                return tipos.find(tipo => tipo == tipoSelect || tipoSelect === 'todos');
            });
        return list;
    }
}
new App();
