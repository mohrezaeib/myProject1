import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isSticky: boolean = false;
  showHeader:boolean=false

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
  constructor(private  router: Router) {

  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      if (this.router.url === 'home' || this.router.url === '') {
        this.showHeader = true;
      } else {
        this.showHeader = false;
      }
    });
  }


}
