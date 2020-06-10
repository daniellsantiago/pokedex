package com.daniel.pokedex.controller;

import com.daniel.pokedex.domain.Tipo;
import com.daniel.pokedex.service.TipoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/tipo")
@RequiredArgsConstructor
public class TiposController {
    private final TipoService tipoService;
    @GetMapping
    public ResponseEntity<List<Tipo>> findAll() {
        return ResponseEntity.ok(tipoService.findAll());
    }
}
