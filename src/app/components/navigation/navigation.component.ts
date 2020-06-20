import { Component, OnInit } from '@angular/core';
import {DataService} from '../../sevices/data.service';
import {Nav} from '../../models/nav';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  nav: Nav;
  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.getNav().subscribe((result) => {
      // console.log(result.list[0].itemName);
      this.nav = result;
    });
  }


}
