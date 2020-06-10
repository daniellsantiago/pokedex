package com.daniel.pokedex.util;

public class PokemonReduced {
    private int numeroDex;
    private String nome;

    public PokemonReduced(int numeroDex, String nome) {
        this.numeroDex = numeroDex;
        this.nome = nome;
    }

    public int getNumeroDex() {
        return numeroDex;
    }

    public void setNumeroDex(int numeroDex) {
        this.numeroDex = numeroDex;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
