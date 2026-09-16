import api from './axios';
import type { Propiedad, PropiedadForm, LoginResponse, FiltrosPropiedades, Foto } from '../types';

// ==========================================
//              AUTH
// ==========================================

export const login = async (username: string, password: string): Promise<LoginResponse> => {
    const { data } = await api.post<LoginResponse>('/auth/login', { username, password });
    return data;
};

// ==========================================
//           PROPIEDADES
// ==========================================

export const getPropiedades = async (filtros?: FiltrosPropiedades): Promise<Propiedad[]> => {
    const { data } = await api.get<Propiedad[]>('/propiedades', { params: filtros });
    return data;
};

export const getPropiedad = async (id: number): Promise<Propiedad> => {
    const { data } = await api.get<Propiedad>(`/propiedades/${id}`);
    return data;
};

export const crearPropiedad = async (propiedad: PropiedadForm): Promise<Propiedad> => {
    const { data } = await api.post<Propiedad>('/propiedades', propiedad);
    return data;
};

export const actualizarPropiedad = async (id: number, propiedad: PropiedadForm): Promise<Propiedad> => {
    const { data } = await api.put<Propiedad>(`/propiedades/${id}`, propiedad);
    return data;
};

export const eliminarPropiedad = async (id: number): Promise<void> => {
    await api.delete(`/propiedades/${id}`);
};

export const actualizarPrecios = async (porcentaje: number): Promise<string> => {
    const { data } = await api.post<string>(`/propiedades/actualizar-precios`, null, {
        params: { porcentaje },
    });
    return data;
};

// ==========================================
//              FOTOS
// ==========================================

export const getFotos = async (propiedadId: number): Promise<Foto[]> => {
    const { data } = await api.get<Foto[]>(`/propiedades/${propiedadId}/fotos`);
    return data;
};

export const agregarFoto = async (propiedadId: number, url: string, orden?: number): Promise<Foto> => {
    const { data } = await api.post<Foto>(`/propiedades/${propiedadId}/fotos`, { url, orden });
    return data;
};

export const eliminarFoto = async (propiedadId: number, fotoId: number): Promise<void> => {
    await api.delete(`/propiedades/${propiedadId}/fotos/${fotoId}`);
};