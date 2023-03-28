import { Component } from '@angular/core';

export interface ListElement {
  nombre: string;
  posicion: number;
  apellido: string;
  regularidad: string;
}

const STUDENT_DATA: ListElement[] = [
  { posicion: 1, nombre: 'Mariano', apellido: 'Pereyra', regularidad: 'Regular' },
  { posicion: 2, nombre: 'Valeria', apellido: 'Hernandez', regularidad: 'Libre' },
  { posicion: 3, nombre: 'Carla', apellido: 'Levys', regularidad: 'Regular' },
  { posicion: 4, nombre: 'Marina', apellido: 'Bembenuto', regularidad: 'Regular' },
  { posicion: 5, nombre: 'Brian', apellido: 'Benitez', regularidad: 'Regular' },
  { posicion: 6, nombre: 'Carina', apellido: 'Cruz', regularidad: 'Libre' },
  { posicion: 7, nombre: 'Nilda', apellido: 'Newman', regularidad: 'Libre' },
  { posicion: 8, nombre: 'Ornella', apellido: 'Olsen', regularidad: 'Regular' },

];

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {
  displayedColumns: string[] = ['posicion', 'nombre', 'apellido', 'regularidad'];
  dataSource = STUDENT_DATA;
}



