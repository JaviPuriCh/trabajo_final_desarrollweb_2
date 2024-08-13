import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LibroService {
  private apiUrl = 'http://localhost:5000/api/libros';

  constructor(private http: HttpClient) { }

  listarLibros(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  obtenerLibro(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  crearLibro(libro: any): Observable<any> {
    return this.http.post(this.apiUrl, libro);
  }

  actualizarLibro(id: string, libro: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, libro);
  }

  eliminarLibro(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
