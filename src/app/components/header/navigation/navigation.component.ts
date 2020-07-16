import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isSticky = false;
  homepage = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {

    this.isSticky = window.pageYOffset >= 250;

  }


  constructor(private  router: Router, private  auth: AuthService) {
  }


  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (!(event instanceof NavigationEnd)) {
        // console.log(this.router.url)
        return;
      }
      if (this.router.url === '/home' || this.router.url === '/') {
        this.homepage = true;
      } else {
        this.homepage = false;

      }
    });
  }
  loggedIn(){
    return this.auth.isLoggedIn();
  }
  userName(){
    let user;
    user = this.auth.getUser();
    return user.name + ' ' + user.familyName;

  }
  loggOut(){
    return this.auth.logout();

  }


}
