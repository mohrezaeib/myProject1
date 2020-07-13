import { Component } from '@angular/core';
// import {DataService} from '../../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  returnUrl: string;
  private sub: any;
  type = '2';
  swal: any;
  focus;
  focus1;
  mobile: string;
  password: string;
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.returnUrl = route.snapshot.queryParams['returnUrl'];
    this.swal = Swal;
  }
  login() {
    this.swal.showLoading();
    if (this.mobile && this.password) {
      this.authService.login(this.mobile, this.password)
        .subscribe(result => {
            if (result.status) {
              console.log('User is logged in :' , this.returnUrl);
              this.swal.hideLoading();
              this.swal.close();
              this.router.navigateByUrl(this.returnUrl);
            } else {
              this.swal.fire('WARNING', result.message , 'warning');
            }

          }, error => {
            console.log(error);
            this.swal.fire('ERROR', 'An error happens, Please contact support' , 'error');
          }
        );
    }
  }

}
