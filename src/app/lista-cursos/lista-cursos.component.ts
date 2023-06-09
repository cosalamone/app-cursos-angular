import { Component, ViewChild } from '@angular/core';
import { MatLegacyTable as MatTable } from '@angular/material/legacy-table';


export interface DynamicListCursosComponent {
  position: number;
  name: string;
  duration: number;
  teacher: string;
  comision: number;

}

const CURSOS_DATA: DynamicListCursosComponent[] = [
  { position: 1, name: 'Diseño Web', duration: 10, teacher: 'Perez', comision: 3051, },
  { position: 2, name: 'JavaScript', duration: 12, teacher: 'Alonso', comision: 4020, },
  { position: 3, name: 'Angular', duration: 12, teacher: 'Gonzalez', comision: 2564, },
  { position: 4, name: 'React', duration: 10, teacher: 'Rodriguez', comision: 5279, },

];

/**
* @title Adding and removing data when using an array-based datasource.
*/

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})

export class ListaCursosComponent {

  displayedColumns: string[] = ['position', 'name', 'duration', 'teacher', 'comision'];
  dataSource = [...CURSOS_DATA];


  @ViewChild(MatTable) table: MatTable<ListaCursosComponent>;


  addData() {
    const randomElementIndex = Math.floor(Math.random() * CURSOS_DATA.length);
    this.dataSource.push(CURSOS_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}
