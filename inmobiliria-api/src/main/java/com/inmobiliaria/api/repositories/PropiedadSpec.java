package com.inmobiliaria.api.repositories;

import com.inmobiliaria.api.entities.Propiedad;
import org.springframework.data.jpa.domain.Specification;

public class PropiedadSpec {

    public static Specification<Propiedad> conTipo(String tipo) {
        return (root, query, cb) -> tipo == null || tipo.isEmpty() ? null :
            cb.equal(cb.lower(root.get("tipo")), tipo.toLowerCase());
    }

    public static Specification<Propiedad> conCategoria(String categoria) {
        return (root, query, cb) -> categoria == null || categoria.isEmpty() ? null :
            cb.equal(cb.lower(root.get("categoria")), categoria.toLowerCase());
    }

    public static Specification<Propiedad> conUbicacion(String ubicacion) {
        return (root, query, cb) -> ubicacion == null || ubicacion.isEmpty() ? null :
            cb.like(cb.lower(root.get("ubicacion")), "%" + ubicacion.toLowerCase() + "%");
    }

    public static Specification<Propiedad> conMoneda(String moneda) {
        return (root, query, cb) -> moneda == null || moneda.isEmpty() ? null :
            cb.equal(cb.lower(root.get("moneda")), moneda.toLowerCase());
    }

    public static Specification<Propiedad> precioMin(Double min) {
        return (root, query, cb) -> min == null ? null :
            cb.greaterThanOrEqualTo(root.get("precio"), min);
    }

    public static Specification<Propiedad> precioMax(Double max) {
        return (root, query, cb) -> max == null ? null :
            cb.lessThanOrEqualTo(root.get("precio"), max);
    }
}
