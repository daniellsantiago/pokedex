class App {
    constructor() {
        this.api = axios.create({baseURL: 'http://localhost:8080/api'});
        this.pokemons = [];
        this.tipos = [];
        this.urlImg = "../assets/imgs/pokes/";

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
            pokemonsTr =`<tr">
                            <td colspan="2" style="text-align:center;">
                                SEM REGISTROS
                            </td>
                        </tr>`;
        } else {
            list.forEach(pokemon => {
                pokemonsTr += `<tr onclick=app.pokemonDetail(this) key = "${pokemon.numeroDex}">
                                    <td>#${pokemon.numeroDex}</td>
                                    <td class = 'nomePokemon'>${pokemon.nome}</td>
                                </tr>`;
            });
        }
        tbody.innerHTML  = pokemonsTr;
        this.setHandlers();
    }
    pokemonDetail(tr) {
        document.querySelectorAll("tr").forEach(tr => tr.classList.remove("pokemonSelecionado"));
        tr.classList.add("pokemonSelecionado");

        const numeroDex = tr.getAttribute("key");
        const pokemon = this.pokemons.find(pokemon => pokemon.numeroDex == numeroDex);
        const {
            nome,
            img,
            descricao,
            anterior,
            proximo,
            tipos
        } = pokemon;
        
        const titulo = `${nome} - #${numeroDex}`;
        const pokemonAnterior = anterior ? anterior.nome : "NENHUM";
        const pokemonProximo = proximo ? proximo.nome : "NENHUM";
        let tipoSpan = '';
        tipos.forEach(tipo => {
            const cor = tipo.cor ? `background-color: ${tipo.cor};` : '';
            const textCor = tipo.textCor ? `color: ${tipo.textCor};` : '';
            const style = `style="${cor} ${textCor}"`
            console.log(textCor);
            tipoSpan += `<span key = "${tipo.id}" ${style}>
                            ${tipo.nome}
                         </span>`;
        });

        document.querySelector("#titulo").innerText = titulo;
        document.querySelector("#imagem > img").src = this.urlImg + img;
        document.querySelector("#descricao").innerText = descricao;
        document.querySelector("#tipos").innerHTML = tipoSpan;
        document.querySelector("#evoluiDe > span").innerText = pokemonAnterior;
        document.querySelector("#evoluiPara > span").innerText = pokemonProximo;
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
app = new App();
