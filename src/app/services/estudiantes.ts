import { Injectable } from '@angular/core';
import { Estudiante } from '../models/estudiante';

@Injectable({ providedIn: 'root' })
export class EstudianteService {
  private estudiantes: Estudiante[] = [
    { id: 1, nombre: 'María López', correo: 'maria@gmail.com', carrera: 'Administración', telefono: '7777-1111' },
    { id: 2, nombre: 'Carlos Ramírez', correo: 'carlos@gmail.com', carrera: 'Ingeniería', telefono: '7777-2222' }
  ];

  obtenerEstudiantes(): Estudiante[] {
    return this.estudiantes;
  }

  agregarEstudiante(est: Estudiante): void {
    est.id = this.estudiantes.length + 1;
    this.estudiantes.push(est);
  }

  actualizarEstudiante(est: Estudiante): void {
    const index = this.estudiantes.findIndex(e => e.id === est.id);
    if (index !== -1) {
      this.estudiantes[index] = est;
    }
  }

  // Brian empieza aquí. Se vacía el mismo arreglo para que la pantalla se actualice.
  limpiarEstudiantes(): void {
    this.estudiantes.splice(0, this.estudiantes.length);
  }
  // Brian termina aquí.

  eliminarEstudiante(id: number): void {
    const index = this.estudiantes.findIndex(e => e.id === id);
    if (index !== -1) {
      this.estudiantes.splice(index, 1);
    }
  }
}
