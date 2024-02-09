import { Component, Input } from '@angular/core';
import { TablaComponent } from '../tabla/tabla.component';
import { Libro } from '../libro.model';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LibroService } from '../libro.service';


@Component({
  selector: 'app-add',
  standalone: true,
  imports: [TablaComponent,CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})


export class AddComponent {
  @Input() libros: Libro[]=[]

  
  
  constructor(public formBuilder:FormBuilder,private libroService: LibroService
    ){}

  add: FormGroup = this.formBuilder.group({
    titulo: ['', Validators.required],
    autor: ['', Validators.required],
    idioma: ['', Validators.required]
  });


onSubmit(): void {
  let last: number = 0;

  if (this.libros.length > 0) {
    last = this.libros[this.libros.length - 1].id + 1;
    console.log(last)
  } else {
    last = 0; 
  }
  const newProduct: Libro = {
    id: last,
    titulo: this.add.value.titulo,
    autor:  this.add.value.autor,
    idioma: this.add.value.idioma
  };
  this.libroService.agregarLibro(newProduct);
  this.add.reset()
}
}