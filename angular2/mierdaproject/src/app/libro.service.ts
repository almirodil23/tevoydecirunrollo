import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Libro } from './libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private libros: Libro[] = [
    { id: 0, titulo: 'Book 1', autor: 'Author 1', idioma: 'Spanish' },
    { id: 1, titulo: 'Book 2', autor: 'Author 2', idioma: 'English' }
  ];
  libros$ = new BehaviorSubject<Libro[]>(this.libros);

  agregarLibro(nuevoLibro: Libro): void {
    this.libros.push(nuevoLibro);
    this.libros$.next(this.libros);
  }

  obtenerLibros(): Libro[] {
    return this.libros;
  }
}
