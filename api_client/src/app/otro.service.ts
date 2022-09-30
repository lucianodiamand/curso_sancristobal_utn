import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtroService {

  constructor() { }

  getMasDatos(): Observable<number> {
    return of(1, 2, 3);
  }
}
