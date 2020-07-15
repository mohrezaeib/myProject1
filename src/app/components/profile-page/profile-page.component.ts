import { Component, OnInit } from '@angular/core';
import {GetuserInfoService} from '../../services/getuser-info.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  userInfo: User ;

  constructor(private getUser: GetuserInfoService) { }

  ngOnInit(): void {
    this.getUser.getInfo().subscribe(r => {
     // console.log(r);
      this.userInfo = r ;
    });
  }
  edit(){
      console.log();


  }
  submit(){
    console.log(this.userInfo.mobile)
  }
}
