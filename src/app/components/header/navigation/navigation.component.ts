import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private   actrout: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.actrout.url.subscribe(data => {
      console.log(data);
    });
  }


}
