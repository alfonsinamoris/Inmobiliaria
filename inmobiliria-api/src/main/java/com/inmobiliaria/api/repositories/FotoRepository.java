package com.inmobiliaria.api.repositories;

import com.inmobiliaria.api.entities.Foto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FotoRepository extends JpaRepository<Foto, Long> {
    List<Foto> findByPropiedadIdOrderByOrdenAsc(Long propiedadId);
    void deleteByPropiedadId(Long propiedadId);
}