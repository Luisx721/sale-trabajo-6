
import  {Component, inject} from '@angular/core';
import { Estudiante } from './models/estudiante';
//nuevas importaciones:
import { FormsModule } from '@angular/forms';
import { EstudianteService } from './services/estudiantes';

@Component ({
  selector: 'app-root',
  imports: [FormsModule],//añadimos el formsModule
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  titulo : string = "Sistemas de Gestion Academica";
  //modificamos todo el codigo que estaba acá
private estudianteService = inject(EstudianteService);
  estudiantes = this.estudianteService.obtenerEstudiantes();

  nuevoEstudiante: Estudiante = { id: 0, nombre: '', correo: '', carrera: '', telefono: '' };

  // Carlos empieza aquí. El buscador compara el texto con los datos de cada estudiante.
  textoBusqueda = '';

  get estudiantesFiltrados(): Estudiante[] {
    const texto = this.textoBusqueda.trim().toLocaleLowerCase();
    return this.estudiantes.filter(estudiante =>
      [estudiante.nombre, estudiante.correo, estudiante.carrera, estudiante.telefono]
        .some(dato => dato.toLocaleLowerCase().includes(texto))
    );
  }
  // Carlos termina aquí.

  guardarEstudiante() {
    if (this.nuevoEstudiante.id === 0) {
      this.estudianteService.agregarEstudiante({ ...this.nuevoEstudiante });
    } else {
      this.estudianteService.actualizarEstudiante(this.nuevoEstudiante);
    }
    this.limpiarFormulario();
  }

  // Luis empieza aquí. Se guarda el identificador de la tarjeta que se está editando.
  idEditando: number | null = null;

  seleccionarParaEditar(estudiante: Estudiante) {
    this.nuevoEstudiante = { ...estudiante };
    this.idEditando = estudiante.id;
  }
  // Luis termina aquí.

  // Carlos empieza aquí. Cancelar la confirmación conserva al estudiante.
  eliminar(id: number) {
    if (window.confirm('¿Deseas eliminar este estudiante?')) {
      this.estudianteService.eliminarEstudiante(id);
      // Si se elimina el estudiante que estaba en el formulario, se cancela su edición.
      if (this.nuevoEstudiante.id === id) {
        this.limpiarFormulario();
      }
    }
  }
  // Carlos termina aquí.

  // Brian empieza aquí. El botón vacía la lista y deja el formulario listo para registrar.
  limpiarLista() {
    this.estudianteService.limpiarEstudiantes();
    this.limpiarFormulario();
    this.textoBusqueda = '';
  }
  // Brian termina aquí.

  limpiarFormulario() {
    // Luis empieza aquí. Guardar, cancelar o borrar quita el resaltado de edición.
    this.idEditando = null;
    // Luis termina aquí.
    this.nuevoEstudiante = { id: 0, nombre: '', correo: '', carrera: '', telefono: '' };
  }
}
