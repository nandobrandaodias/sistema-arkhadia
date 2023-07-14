import { Injectable } from '@angular/core';

import { Sorcerer } from '../Sorcerer';

import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private apiUrl = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) { }

  removeSorcerer(){}

  getAll(): Observable<Sorcerer[]> {
    return this.http.get<Sorcerer[]>(this.apiUrl);
  }

}
