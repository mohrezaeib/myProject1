import {Component, HostListener, OnInit} from '@angular/core';
import { Location } from '@angular/common';

import {ActivatedRoute, NavigationEnd, NavigationStart, Router, RoutesRecognized} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isSticky = false;
  showHeader = true;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
  constructor(private   actrout: ActivatedRoute, private router: Router, private location: Location) {

  }

  ngOnInit(): void {
    // console.log(this.rout.url)
    // console.log(this.actrout.snapshot.queryParams, this.actrout.snapshot.fragment, this.actrout.snapshot.pathFromRoot );
  // @ts-ignore
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        if (this.router.url !== '/home') { this.showHeader = false; }
        else { this.showHeader = true; }

      }

  });

  }


}
