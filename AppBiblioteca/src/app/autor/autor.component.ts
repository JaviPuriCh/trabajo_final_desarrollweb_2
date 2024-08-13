import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, NgForm, Validators, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AutorService } from '../service/autor.service';
import { AutorEntidad } from '../entidades/autor.entidad';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-autor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule, FormsModule, TableModule],
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})

export class AutorComponent implements OnInit{
   groupAutor:FormGroup;
 
  @ViewChild('inputNombre') inputNombre:ElementRef;
  @ViewChild('inputApellidos') inputApellidos:ElementRef;
  
  constructor(private autorService:AutorService){
    
  }

  public autores:AutorEntidad[] = [];
  public newAutor: any = {};
  public editarAutor: any = {};
  public btnActivo : boolean = true;

  ngOnInit() {
    this.groupAutor = new FormGroup({
      nombre:  new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellidos: new FormControl('', [Validators.required, Validators.minLength(3)]),
    })

    this.listarAutores();
  }

  crearAutor(autor:AutorEntidad) {
    this.autorService.crearAutor(autor).subscribe(() => {
      this.newAutor = new AutorEntidad;
      this.limpiarUnAutor();
      this.listarAutores();
    });
  }
  
  listarAutores(): void {
    this.autorService.listarAutores().subscribe((data) => {
      this.autores = data;
            
    });
  }

  eliminarAutor(id: string): void {
    console.log("Id eliminado: " + id);
    this.autorService.eliminarAutor(id).subscribe(() => {
      this.listarAutores();
    });
  }

  editarUnAutor(autor:AutorEntidad){
    this.newAutor._id=autor._id;
    this.newAutor.nombre=autor.nombre;
    this.newAutor.apellidos=autor.apellidos;
    this.btnActivo = false;
  }

  actualizarAutor(id: string, autor:AutorEntidad): void {
    this.autorService.actualizarAutor(id, autor).subscribe(() => {
      this.listarAutores();
      this.limpiarUnAutor();
      this.btnActivo = true;

    });
  }

  limpiarUnAutor(){
    this.newAutor = new AutorEntidad();
  }
  
}
