import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  register(registerForm: any) {
    return this.httpClient.post('http://localhost:3000/user', registerForm);
  }

  update(id:string, data: any){
    return this.httpClient.patch(`http://localhost:3000/user/${id}`, data)
  }
}
