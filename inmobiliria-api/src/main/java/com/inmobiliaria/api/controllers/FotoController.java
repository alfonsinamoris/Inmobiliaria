package com.inmobiliaria.api.controllers;

import com.inmobiliaria.api.entities.Foto;
import com.inmobiliaria.api.entities.Propiedad;
import com.inmobiliaria.api.repositories.FotoRepository;
import com.inmobiliaria.api.repositories.PropiedadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/propiedades/{propiedadId}/fotos")
public class FotoController {

    @Autowired
    private FotoRepository fotoRepository;

    @Autowired
    private PropiedadRepository propiedadRepository;

    // GET /api/propiedades/{id}/fotos → lista las fotos de una propiedad
    @GetMapping
    public ResponseEntity<List<Foto>> listar(@PathVariable Long propiedadId) {
        if (!propiedadRepository.existsById(propiedadId)) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(fotoRepository.findByPropiedadIdOrderByOrdenAsc(propiedadId));
    }

    // POST /api/propiedades/{id}/fotos → agrega una foto (requiere JWT)
    // Body: { "url": "https://...", "orden": 0 }
    @PostMapping
    public ResponseEntity<Foto> agregar(@PathVariable Long propiedadId,
                                        @RequestBody Foto foto) {
        Propiedad propiedad = propiedadRepository.findById(propiedadId)
                .orElse(null);
        if (propiedad == null) return ResponseEntity.notFound().build();

        foto.setPropiedad(propiedad);
        // Si no se especifica orden, la ponemos al final
        if (foto.getOrden() == null) {
            int total = fotoRepository.findByPropiedadIdOrderByOrdenAsc(propiedadId).size();
            foto.setOrden(total);
        }

        return ResponseEntity.status(201).body(fotoRepository.save(foto));
    }

    // DELETE /api/propiedades/{id}/fotos/{fotoId} → elimina una foto (requiere JWT)
    @DeleteMapping("/{fotoId}")
    public ResponseEntity<Void> eliminar(@PathVariable Long propiedadId,
                                         @PathVariable Long fotoId) {
        Foto foto = fotoRepository.findById(fotoId).orElse(null);
        if (foto == null || !foto.getPropiedad().getId().equals(propiedadId)) {
            return ResponseEntity.notFound().build();
        }
        fotoRepository.delete(foto);
        return ResponseEntity.noContent().build();
    }

    // PUT /api/propiedades/{id}/fotos/reordenar → reordena las fotos (requiere JWT)
    // Body: [{ "id": 1, "orden": 0 }, { "id": 2, "orden": 1 }]
    @PutMapping("/reordenar")
    public ResponseEntity<Void> reordenar(@PathVariable Long propiedadId,
                                          @RequestBody List<Foto> fotosConOrden) {
        fotosConOrden.forEach(f -> {
            fotoRepository.findById(f.getId()).ifPresent(foto -> {
                foto.setOrden(f.getOrden());
                fotoRepository.save(foto);
            });
        });
        return ResponseEntity.ok().build();
    }
}