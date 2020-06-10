package com.daniel.pokedex.repository;

import com.daniel.pokedex.domain.Tipo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TipoRepository extends JpaRepository<Tipo, Integer> {
    Tipo findByNome(String nome);
}
