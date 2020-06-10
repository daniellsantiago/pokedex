package com.daniel.pokedex.domain;

import com.daniel.pokedex.util.PokemonReduced;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Pokemon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "numero_dex")
    private Integer numeroDex;
    private String nome;
    @Nullable
    @OneToOne
    @JoinColumn(name = "anterior")
    private Pokemon anterior;
    @Nullable
    @OneToOne
    @JoinColumn(name = "proximo")
    private Pokemon proximo;
    private String img;
    private String descricao;
    @ManyToMany
    @JoinTable(name = "pokemons_tipos",
            joinColumns = @JoinColumn(name = "id_pokemon"),
            inverseJoinColumns = @JoinColumn(name = "id_tipo")
    )
    private List<Tipo> tipos;

    @Nullable
    public PokemonReduced getProximo() {
        if (proximo != null){
            return new PokemonReduced(proximo.getNumeroDex(), proximo.getNome());
        }
        return null;
    }

    @Nullable
    public PokemonReduced getAnterior() {
        if (anterior != null){
            return new PokemonReduced(anterior.getNumeroDex(), anterior.getNome());
        }
        return null;
    }
}
