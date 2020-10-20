import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user={}

  constructor(private authservice: AuthService,private router:Router) { }

  ngOnInit() {
  }

  singup(){
    this.authservice.signup(this.user).subscribe(
      res => {
        console.log("exito")
        localStorage.setItem('',res.token)
        this.router.navigate(['/home']);
      },
      err => console.log(err)
      
    )

  }

}
