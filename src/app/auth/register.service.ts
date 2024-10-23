import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private httpClient: HttpClient) {}


  register(registerForm: any) {
    return this.httpClient.post('http://localhost:3000/user', registerForm);
  }

}
