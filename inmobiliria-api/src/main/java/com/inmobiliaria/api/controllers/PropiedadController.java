package com.inmobiliaria.api.controllers;

import com.inmobiliaria.api.entities.Propiedad;
import com.inmobiliaria.api.repositories.PropiedadRepository;
import com.inmobiliaria.api.repositories.PropiedadSpec;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/propiedades")
public class PropiedadController {

    @Autowired
    private PropiedadRepository propiedadRepository;

    @GetMapping
    public List<Propiedad> listar(
        @RequestParam(required = false) String tipo,
        @RequestParam(required = false) String categoria,
        @RequestParam(required = false) String ubicacion,
        @RequestParam(required = false) String moneda,
        @RequestParam(required = false) String precioMin,
        @RequestParam(required = false) String precioMax,
        @RequestParam(required = false) Boolean destacada) {

        if (destacada != null && destacada) {
            return propiedadRepository.findByDestacadaTrue();
        }

        Double min = (precioMin != null && !precioMin.isEmpty()) ? Double.parseDouble(precioMin) : null;
        Double max = (precioMax != null && !precioMax.isEmpty()) ? Double.parseDouble(precioMax) : null;

        Specification<Propiedad> spec = Specification
            .where(PropiedadSpec.conTipo(tipo))
            .and(PropiedadSpec.conCategoria(categoria))
            .and(PropiedadSpec.conUbicacion(ubicacion))
            .and(PropiedadSpec.conMoneda(moneda))
            .and(PropiedadSpec.precioMin(min))
            .and(PropiedadSpec.precioMax(max));

        return propiedadRepository.findAll(spec);
    }

    // GET /api/propiedades/{id} → una propiedad con sus fotos
    @GetMapping("/{id}")
    public ResponseEntity<Propiedad> obtener(@PathVariable Long id) {
        return propiedadRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // ==========================================
    //   ENDPOINTS ADMIN (requieren JWT)
    // ==========================================

    // POST /api/propiedades → crear nueva
    @PostMapping
    public ResponseEntity<Propiedad> crear(@Valid @RequestBody Propiedad propiedad) {
        return ResponseEntity.status(201).body(propiedadRepository.save(propiedad));
    }

    // PUT /api/propiedades/{id} → actualizar existente
    @PutMapping("/{id}")
    public ResponseEntity<Propiedad> actualizar(@PathVariable Long id,
                                                @Valid @RequestBody Propiedad datos) {
        return propiedadRepository.findById(id).map(p -> {
            p.setTitulo(datos.getTitulo());
            p.setDescripcion(datos.getDescripcion());
            p.setPrecio(datos.getPrecio());
            p.setMoneda(datos.getMoneda());
            p.setTipo(datos.getTipo());
            p.setUbicacion(datos.getUbicacion());
            p.setIndiceActualizacion(datos.getIndiceActualizacion());
            p.setFechaInicioContrato(datos.getFechaInicioContrato());
            p.setDestacada(datos.getDestacada());
            return ResponseEntity.ok(propiedadRepository.save(p));
        }).orElse(ResponseEntity.notFound().build());
    }

    // DELETE /api/propiedades/{id} → eliminar
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        if (!propiedadRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        propiedadRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // POST /api/propiedades/actualizar-precios?porcentaje=10
    @PostMapping("/actualizar-precios")
    public ResponseEntity<String> actualizarPrecios(@RequestParam Double porcentaje) {
        List<Propiedad> alquileres = propiedadRepository.findByTipoIgnoreCase("Alquiler");
        alquileres.forEach(p -> p.setPrecio(p.getPrecio() * (1 + porcentaje / 100)));
        propiedadRepository.saveAll(alquileres);
        return ResponseEntity.ok("Precios actualizados: " + alquileres.size() + " propiedades");
    }

    // GET /api/propiedades/destacadas → propiedades destacadas para el home
    @GetMapping("/destacadas")
    public List<Propiedad> destacadas() {
        return propiedadRepository.findByDestacadaTrue();
    }
}
