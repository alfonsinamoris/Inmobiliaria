package com.inmobiliaria.api.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "foto")
public class Foto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String url;   // URL de Cloudinary (o cualquier servicio de imágenes)
    private Integer orden; // Para ordenar las fotos: 0 = foto principal

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "propiedad_id")
    @JsonIgnore // Evita bucle infinito al serializar a JSON
    private Propiedad propiedad;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getUrl() { return url; }
    public void setUrl(String url) { this.url = url; }

    public Integer getOrden() { return orden; }
    public void setOrden(Integer orden) { this.orden = orden; }

    public Propiedad getPropiedad() { return propiedad; }
    public void setPropiedad(Propiedad propiedad) { this.propiedad = propiedad; }
}