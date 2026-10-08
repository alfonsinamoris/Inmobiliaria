package com.inmobiliaria.api.repositories;

import com.inmobiliaria.api.entities.Propiedad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropiedadRepository extends JpaRepository<Propiedad, Long>, JpaSpecificationExecutor<Propiedad> {
    List<Propiedad> findByTipoIgnoreCase(String tipo);
    List<Propiedad> findByDestacadaTrue();
}
