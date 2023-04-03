import { Component } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  
  user:User = new User();
  faUser = faUserCircle;
  errorMessage : string = "";

  constructor(private authenticationService:AuthenticationService, private router:Router){}

  ngOnInit(): void {
    if(this.authenticationService.currentUserValue?.id){
      this.router.navigate(['/profile']);
      return;
    }
  }

  login(){
    this.authenticationService.login(this.user).subscribe(data=>{
      this.router.navigate(['/profile'])
    },
    err=>{
      this.errorMessage = 'Username or Password is incorrect.'
    })
  }

}
