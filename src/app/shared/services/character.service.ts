import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
  });
  constructor(private httpClient: HttpClient) {}

  createCharacter(data: any): Observable<any> {
    return this.httpClient.post('http://localhost:3000/character', data, {
      headers: this.headers,
    });
  }

  getCharacter(id: any): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/character/${id}`, {
      headers: this.headers,
    });
  }

  getAllcharacters(): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/character`, {
      headers: this.headers,
    });
  }

  updateCharacter(id: string, data: any): Observable<any> {
    return this.httpClient.patch(
      `http://localhost:3000/character/${id}`,
      data,
      { headers: this.headers }
    );
  }

  deleteCharacter(id: string): Observable<any> {
    return this.httpClient.delete(`http://localhost:3000/character/${id}`, {
      headers: this.headers,
    });
  }
}
