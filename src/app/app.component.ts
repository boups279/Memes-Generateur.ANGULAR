import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { tokenInterceptor } from './services/interceptor/token.interceptor';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './public/register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeaderComponent, FooterComponent, LoginComponent, HomeComponent, RegisterComponent,HttpClientModule
],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useValue: tokenInterceptor,
      multi: true
    }
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Memes-Generateur';  
}
