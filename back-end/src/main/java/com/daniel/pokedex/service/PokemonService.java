package com.daniel.pokedex.service;

import com.daniel.pokedex.domain.Pokemon;
import com.daniel.pokedex.domain.Tipo;
import com.daniel.pokedex.repository.PokemonRepository;
import com.daniel.pokedex.repository.TipoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PokemonService {
    private final PokemonRepository pokemonRepository;
    private final TipoRepository tipoRepository;

    public List<Pokemon> findAll() {
        return pokemonRepository.findAll();
    }

    public List<Pokemon> findByTipo(String tipo){
        Tipo tipoFound = tipoRepository.findByNome(tipo);
        return pokemonRepository.findByTipos(tipoFound);
    }
}
