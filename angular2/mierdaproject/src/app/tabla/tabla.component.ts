import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { AddComponent } from '../add/add.component';
import { RouterLink } from '@angular/router';
import { LibroService } from '../libro.service';

export interface Libro {
  id: number,
  titulo:string,
  autor:string,
  idioma:string
}

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule,AddComponent,RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent implements OnInit{
 libros:Libro []=[]

 constructor(private libroService: LibroService) {}

 ngOnInit(): void {
   this.libroService.libros$.subscribe(libros => {
     this.libros = libros;
   })}}