package com.inmobiliaria.api.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "propiedad")
public class Propiedad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El título es obligatorio")
    @Size(max = 150, message = "El título no puede superar los 150 caracteres")
    private String titulo;

    @Size(max = 1000, message = "La descripción no puede superar los 1000 caracteres")
    private String descripcion;

    @NotNull(message = "El precio es obligatorio")
    @Positive(message = "El precio debe ser mayor a cero")
    private Double precio;

    @NotBlank(message = "El tipo es obligatorio")
    @Pattern(regexp = "Alquiler|Venta", message = "El tipo debe ser 'Alquiler' o 'Venta'")
    private String tipo;

    @NotBlank(message = "La ubicación es obligatoria")
    private String ubicacion;

    @Pattern(regexp = "IPC|ICL|", message = "El índice debe ser 'IPC' o 'ICL'")
    private String indiceActualizacion;

    private LocalDate fechaInicioContrato;

    private Boolean destacada = false;

    private String categoria; // "Casa", "Departamento", "Terreno", "Duplex", "Local"

    @OneToMany(mappedBy = "propiedad", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("orden ASC")
    private List<Foto> fotos = new ArrayList<>();

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitulo() { return titulo; }
    public void setTitulo(String titulo) { this.titulo = titulo; }

    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }

    public Double getPrecio() { return precio; }
    public void setPrecio(Double precio) { this.precio = precio; }

    public String getTipo() { return tipo; }
    public void setTipo(String tipo) { this.tipo = tipo; }

    public String getUbicacion() { return ubicacion; }
    public void setUbicacion(String ubicacion) { this.ubicacion = ubicacion; }

    public String getIndiceActualizacion() { return indiceActualizacion; }
    public void setIndiceActualizacion(String indiceActualizacion) { this.indiceActualizacion = indiceActualizacion; }

    public LocalDate getFechaInicioContrato() { return fechaInicioContrato; }
    public void setFechaInicioContrato(LocalDate fechaInicioContrato) { this.fechaInicioContrato = fechaInicioContrato; }

    public Boolean getDestacada() { return destacada; }
    public void setDestacada(Boolean destacada) { this.destacada = destacada; }

    public String getCategoria() { return categoria; }
    public void setCategoria(String categoria) { this.categoria = categoria; }

    public List<Foto> getFotos() { return fotos; }
    public void setFotos(List<Foto> fotos) { this.fotos = fotos; }
}
