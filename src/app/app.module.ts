import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule as MatTableModule } from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';



import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToolbarComponent,
    PageWrapperComponent,
    ListaCursosComponent,
    ListaAlumnosComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
