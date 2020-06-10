package com.daniel.pokedex.service;

import com.daniel.pokedex.domain.Tipo;
import com.daniel.pokedex.repository.TipoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TipoService {
    private final TipoRepository tipoRepository;

    public List<Tipo> findAll() {
        return tipoRepository.findAll();
    }
}
