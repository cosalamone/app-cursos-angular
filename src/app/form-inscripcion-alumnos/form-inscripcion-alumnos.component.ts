import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-form-inscripcion-alumnos',
  templateUrl: './form-inscripcion-alumnos.component.html',
  styleUrls: ['./form-inscripcion-alumnos.component.css']
})


export class FormInscripcionAlumnosComponent {


  nombreApellidoMinLength: number = 3;

  nombreControl = new FormControl('', [Validators.required, Validators.minLength(this.nombreApellidoMinLength)]);
  apellidoControl = new FormControl('', [Validators.required, Validators.minLength(this.nombreApellidoMinLength)]);
  emailControl = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],);
  telefonoControl = new FormControl('');



  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {


    this.registerForm = this.formBuilder.group({

      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      email: this.emailControl,
      telefono: this.telefonoControl,

    })

    console.log(this.emailControl.value)
  }


  getErrorMessage() {
    if (this.emailControl.hasError('required')) {
      return 'Debe registrar un correo';
    }

    return this.emailControl.hasError('pattern') ? 'El correo ingresado no es valido' : '';
  }

  onSubmit(): void {
   if (this.registerForm.valid) {
    console.log(this.registerForm.value)

   } else {
    alert('El formulario está incompleto')
   }
  }
}




