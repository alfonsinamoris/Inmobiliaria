package com.inmobiliaria.api.repositories;

import com.inmobiliaria.api.entities.Propiedad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropiedadRepository extends JpaRepository<Propiedad, Long> {

    List<Propiedad> findByTipoIgnoreCase(String tipo);

    // Búsqueda combinada: filtra por tipo y/o ubicación, ambos opcionales
    @Query("SELECT p FROM Propiedad p WHERE " +
            "(:tipo IS NULL OR LOWER(p.tipo) = LOWER(:tipo)) AND " +
            "(:ubicacion IS NULL OR LOWER(p.ubicacion) LIKE LOWER(CONCAT('%', :ubicacion, '%')))")
    List<Propiedad> buscar(@Param("tipo") String tipo,
                           @Param("ubicacion") String ubicacion);
}