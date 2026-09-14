// Refleja la entidad Foto del backend
export interface Foto {
    id: number;
    url: string;
    orden: number;
}

// Refleja la entidad Propiedad del backend
export interface Propiedad {
    id: number;
    titulo: string;
    descripcion: string;
    precio: number;
    tipo: 'Alquiler' | 'Venta';
    ubicacion: string;
    indiceActualizacion?: 'IPC' | 'ICL';
    fechaInicioContrato?: string;
    fotos: Foto[];
}

// Para crear o editar una propiedad (sin id ni fotos)
export interface PropiedadForm {
    titulo: string;
    descripcion: string;
    precio: number | '';
    tipo: 'Alquiler' | 'Venta' | '';
    ubicacion: string;
    indiceActualizacion?: 'IPC' | 'ICL' | '';
    fechaInicioContrato?: string;
}

// Respuesta del login
export interface LoginResponse {
    token: string;
    username: string;
}

// Filtros para buscar propiedades
export interface FiltrosPropiedades {
    tipo?: string;
    ubicacion?: string;
}