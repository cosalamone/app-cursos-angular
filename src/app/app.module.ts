import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule as MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';




import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { MatIconModule } from '@angular/material/icon';
import { FormInscripcionAlumnosComponent } from './form-inscripcion-alumnos/form-inscripcion-alumnos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToolbarComponent,
    PageWrapperComponent,
    ListaCursosComponent,
    ListaAlumnosComponent,
    FormInscripcionAlumnosComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
