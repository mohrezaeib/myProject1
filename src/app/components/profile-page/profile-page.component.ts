import {Component, OnInit, ViewChild} from '@angular/core';
import {GetuserInfoService} from '../../services/getuser-info.service';
import {User} from '../../models/user';
import {UploadService} from '../../services/upload.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  userInfo: User;
  @ViewChild('f') userInfoForm: NgForm;

  editing = false;
  ineditUser: User;
  newImage: File = null;

  constructor(private getUser: GetuserInfoService, private upload: UploadService) {


  }

  ngOnInit(): void {
    this.getUser.getInfo().subscribe(r => {
      // console.log(r);
      this.userInfo = r;
      this.ineditUser = r;
    });
  }

  edit() {
    console.log();
    this.editing = true;


  }

  submit() {
    console.log(this.ineditUser);
    this.userInfo = this.ineditUser;
    if (this.newImage) {
      this.upload.postFile(this.newImage, '').subscribe(r => {
        console.log('ok');

      }, error => {
        console.log('error');
      });
    }

    this.editing = false;
  }

  cancel() {
    this.editing = false;
  }

  // processFile(event: any){
  //  //
  //   if (event.target.files && event.target.files[0]) {
  //     const reader = new FileReader();
  //
  //     reader.readAsDataURL(event.target.files[0]); // read file as data url
  //
  //     reader.onload = (loadEvent) => { // called once readAsDataURL is completed
  //       this.ineditUser.profileImage = loadEvent.target.result.toString();
  //     };
  //   }
  // }
  processFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.newImage = event.target.files[0];
    }
  }
}
