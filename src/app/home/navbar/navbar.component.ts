import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  // token: string | null = null;
  // decodedToken: any = null;
  // isExpired: boolean = false;


  constructor(private authService: AuthService) {
    
  }

  ngOnInit(): void {
    // this.token = this.authService.getToken();
    // this.decodedToken = this.authService.getDecodedToken();
    // console.log('decodedToken', this.decodedToken);
    // console.log('token', this.token);
  }

  deconnexion(){
    this.authService.logout()
  }
}
