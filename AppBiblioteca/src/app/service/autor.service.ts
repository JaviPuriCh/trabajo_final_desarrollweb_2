import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  autorEditId = new EventEmitter<number>();

  private apiUrl = 'http://localhost:5000/api/autores';

  constructor(private http: HttpClient) { }

  listarAutores(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }

  obtenerAutor(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  crearAutor(autor: any): Observable<any> {
    return this.http.post(this.apiUrl, autor);
  }

  actualizarAutor(id: string, autor: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, autor);
  }

  eliminarAutor(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}
