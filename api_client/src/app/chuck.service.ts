import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Chuck } from './chuck';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  constructor(
    private http: HttpClient
  ) { }

  getMessage(): Observable<Chuck> {
    return this.http.get<Chuck>(
      `${environment.api}/jokes/random`).pipe(
        retry({ count: 5, delay: 1000 }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
    // Ocurrio un error del lado del cliente o error de red
    console.error('Ocurrio un error:', error.error.message);
    } else {
    // El Backend devolvio un codigo de respuesta insatisfactorio
    // El cuerpo de la respuesta puede contener informacion sobre lo sucedido
    console.error(`El Backend devolvio el codigo ${error.status}, ` +
    `cuerpo: ${error.error}`);
    }
    // Devuelve un observable con el mensaje de error
    return throwError('Algo malo sucedio; pruebe mas tarde.');
  }

}
