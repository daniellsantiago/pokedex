package com.daniel.pokedex.repository;

import com.daniel.pokedex.domain.Pokemon;
import com.daniel.pokedex.domain.Tipo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PokemonRepository extends JpaRepository<Pokemon, Integer> {
    List<Pokemon> findByTipos(Tipo tipo);
}
