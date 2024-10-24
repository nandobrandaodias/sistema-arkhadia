import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SheetsService {
  private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
  constructor(private httpClient: HttpClient) {}

  createSheet(data: any){
    return this.httpClient.post('http://localhost:3000/character', data);
  }

  getSheet(id: any){
    return this.httpClient.get(`http://localhost:3000/character/${id}`);
  }

  getAllSheets(){
    return this.httpClient.get(`http://localhost:3000/character`);
  }

  updateSheet(id: string, data: any){
    return this.httpClient.patch(`/api/character/${id}`, data);
  }

  deleteSheet(id: string){
    return this.httpClient.delete('/api/character');
  }
}
