import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private screenshotSubject = new BehaviorSubject<string | null>(null);
  screenshot$ = this.screenshotSubject.asObservable();

  private apiUrl = 'http://127.0.0.1:8000/api/auth';
  switch_memes = 'mon';
  selected_memes = '';
  le_texte: any;

  isItalic = false;
  isBold = false;
  textColor = '#000000';
  fontSize = 16;
  textTransform: string = 'none';


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

  addMeme(meme: { name: string; image: File }): Observable<any> {
    const formData = new FormData();
    formData.append('name', meme.name);
    formData.append('image', meme.image, meme.image.name);

    return this.http.post(`${this.apiUrl}/memes`, formData);
  }

  getMemes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/les_memes`).pipe(
      catchError((error) => {
        console.error('Erreur lors de la récupération des mèmes:', error);
        return throwError(error);
      })
    );
  }

  getUserMemes(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${userId}/memes`);
  }

  saveToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('access_token', token);
    }
  }

  getToken(): string | null {
    return typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
  }

  logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
    }
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  setScreenshot(image: string): void {
    this.screenshotSubject.next(image);
  }

  clearScreenshot(): void {
    this.screenshotSubject.next(null);
  }
}
