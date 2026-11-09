let carrera: string = "Ingeniería de Sistemas";
let notaFinal: number = 8.5;

const notasEstudiante: number[] = [7.5, 8.0, 9.2];

for (const nota of notasEstudiante) {
  console.log(`Nota: ${nota}`);
}

function promedio(a: number, b: number): number {
  return (a + b) / 2;
}

interface Curso {
  codigo: string;
  nombre: string;
  creditos: number;
}

const cursoActual: Curso = {
  codigo: "SC101",
  nombre: "Sistemas Contables",
  creditos: 4
};
