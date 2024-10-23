import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

  constructor(private httpClient: HttpClient, private router: Router) {}

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  getToken() {
    const token = localStorage.getItem('token')
    return JSON.parse(token || '')
  }

  logout() {
    this.removeToken();
    this.router.navigate(['/login']);
  }

  checkAuth() {
    if (this.getToken()) return true;
    return false;
  }

  login(loginForm: any) {
    return this.httpClient.post('http://localhost:3000/login', loginForm, {headers: this.headers});
  }
}
