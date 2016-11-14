import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { LoginDetails } from '../models/login-details'

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [DataService]
})
export class UserLoginComponent implements OnInit {

  details:LoginDetails = {
      username:"",
      password:"",
      rememberMe:true
  };
  valid = true;

  constructor(
    private router:Router,
    private dataService:DataService) {
  }

  ngOnInit() {
  }

  onSubmit(): void {
      //console.log("onSubmit - " + this.details.username + " - "+ this.details.password)
      this.dataService.validateLogin(this.details).subscribe(result => {
          if (result)
              this.router.navigate(['']);
          else
            this.valid = false;
      },
      error => {
          console.log("Error at login Component"+error);
          this.valid = false;
      }
        );
  }
}
