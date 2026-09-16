export interface Foto {
    id: number;
    url: string;
    orden: number;
}

export interface Propiedad {
    id: number;
    titulo: string;
    descripcion: string;
    precio: number;
    tipo: 'Alquiler' | 'Venta';
    categoria?: string;         // ← nuevo
    ubicacion: string;
    destacada: boolean;
    indiceActualizacion?: 'IPC' | 'ICL';
    fechaInicioContrato?: string;
    fotos: Foto[];
}

export interface PropiedadForm {
    titulo: string;
    descripcion: string;
    precio: number | '';
    tipo: 'Alquiler' | 'Venta' | '';
    categoria?: string;         // ← nuevo
    ubicacion: string;
    destacada: boolean;
}

export interface LoginResponse {
    token: string;
    username: string;
}

export interface FiltrosPropiedades {
    tipo?: string;
    categoria?: string;         // ← nuevo
    ubicacion?: string;
    precioMin?: number;         // ← nuevo
    precioMax?: number;         // ← nuevo
    destacada?: boolean;
}