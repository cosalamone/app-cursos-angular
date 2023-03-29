import { Component } from '@angular/core';

export interface ListElement {
  nombre: string;
  posicion: number;
  apellido: string;
  regularidad: boolean;
}

const STUDENT_DATA: ListElement[] = [
  { posicion: 1, nombre: 'Mariano', apellido: 'Pereyra', regularidad: true },
  { posicion: 2, nombre: 'Valeria', apellido: 'Hernandez', regularidad: false },
  { posicion: 3, nombre: 'Carla', apellido: 'Levys', regularidad: false },
  { posicion: 4, nombre: 'Marina', apellido: 'Bembenuto', regularidad: true },
  { posicion: 5, nombre: 'Brian', apellido: 'Benitez', regularidad: false },
  { posicion: 6, nombre: 'Carina', apellido: 'Cruz', regularidad: true },
  { posicion: 7, nombre: 'Nilda', apellido: 'Newman', regularidad: true },
  { posicion: 8, nombre: 'Ornella', apellido: 'Olsen', regularidad: false },

];

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})

export class ListaAlumnosComponent {
  displayedColumns: string[] = ['posicion', 'apellido', 'nombre', 'regularidad'];
  dataSource = STUDENT_DATA;

}



