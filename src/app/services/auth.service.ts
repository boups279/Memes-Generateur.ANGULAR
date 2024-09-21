import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/auth';
  switch_memes = 'mon';
  selected_memes = '';

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  register(credentials: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, credentials);
  }

  // Ajouter un mème
  addMeme(meme: { name: string; image: File }): Observable<any> {
    const formData = new FormData();
    formData.append('name', meme.name);
    formData.append('image', meme.image, meme.image.name);

    return this.http.post(`${this.apiUrl}/memes`, formData); // Point de terminaison pour ajouter un mème
  }

  getMemes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/les_memes`)
      .pipe(
        catchError(error => {
          console.error('Erreur lors de la récupération des mèmes:', error);
          return throwError(error);
        })
      );
  }

  // Dans le même MemeService ou dans un autre service
  getUserMemes(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${userId}/memes`); // Point de terminaison pour récupérer les mèmes d'un utilisateur
  }

  saveToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  // getDecodedToken(): any {
  //   const token = this.getToken();
  //   if (token) {
  //     return this.jwtHelper.decodeToken(token);
  //   }
  //   return null;
  // }

  logout(): void {
    localStorage.removeItem('access_token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
