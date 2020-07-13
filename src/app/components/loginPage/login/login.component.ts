import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/sevices/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl: string;
  mobile: string;
   password: string;
    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
      this.returnUrl = route.snapshot.queryParams['returnUrl'];
     
    }
    login() {
      if (this.mobile && this.password) {
        this.authService.login(this.mobile, this.password)
          .subscribe(result => {
              if (result.status) {
                console.log('User is logged in :' , this.returnUrl);
               
                this.router.navigateByUrl(this.returnUrl);
              } else {
                console.log("wrong ")
              }
  
            }, error => {
              console.log(error);
            }
          );
      }
    }
  

  ngOnInit(): void {
  }

}
