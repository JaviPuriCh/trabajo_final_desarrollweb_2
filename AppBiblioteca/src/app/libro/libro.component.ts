import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { LibroEntidad } from '../entidades/libro.entidad';
import { LibroService } from '../service/libro.service';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-libro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule,TableModule, FormsModule],
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})

export class LibroComponent implements OnInit{

  groupLibro:FormGroup;
 
  @ViewChild('inputTitulo') inputTitulo:ElementRef;
  @ViewChild('inputEditorial') inputEditorial:ElementRef;
  @ViewChild('inputIsbn') inputIsbn:ElementRef;

  
  constructor(private libroService:LibroService){
  }

  public libros:LibroEntidad[] = [];
  public newLibro: any = {};
  public editarLibro: any = {};
  public btnActivo : boolean = true;

  ngOnInit() {
    this.listarLibros();
  }
  
  crearLibro(libro:LibroEntidad) {
    this.libroService.crearLibro(libro).subscribe(() => {
      this.newLibro = new LibroEntidad;
      this.limpiarLibro();
      this.listarLibros();
      
    });
  }

  listarLibros(): void {
    this.libroService.listarLibros().subscribe((data) => {
      this.libros = data;
    });
  }

  eliminarLibro(id: string): void {
    this.libroService.eliminarLibro(id).subscribe(() => {
      this.listarLibros();
    });
  }

  editarUnLibro(libro:LibroEntidad){
    this.newLibro._id = libro._id;
    this.newLibro.titulo = libro.titulo;
    this.newLibro.editorial = libro.editorial;
    this.newLibro.isbn = libro.isbn;
    this.btnActivo = false;
  }

  actualizarLibro(id: string, libro:LibroEntidad): void {
    this.libroService.actualizarLibro(id, libro).subscribe(() => {
      this.listarLibros();
      this.limpiarLibro();
      this.btnActivo = true;

    });
  }

  limpiarLibro(){
    this.newLibro = new LibroEntidad();
  }
  
}


