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

    List<Propiedad> findByDestacadaTrue();

    @Query("SELECT p FROM Propiedad p WHERE " +
        "(:tipo IS NULL OR LOWER(p.tipo) = LOWER(:tipo)) AND " +
        "(:categoria IS NULL OR LOWER(p.categoria) = LOWER(:categoria)) AND " +
        "(:ubicacion IS NULL OR LOWER(p.ubicacion) LIKE LOWER(CONCAT('%', :ubicacion, '%'))) AND " +
        "(:precioMin IS NULL OR p.precio >= :precioMin) AND " +
        "(:precioMax IS NULL OR p.precio <= :precioMax)")
    List<Propiedad> buscar(@Param("tipo") String tipo,
                           @Param("categoria") String categoria,
                           @Param("ubicacion") String ubicacion,
                           @Param("precioMin") Double precioMin,
                           @Param("precioMax") Double precioMax);
}
