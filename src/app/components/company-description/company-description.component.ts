import { Component, OnInit } from '@angular/core';

import {Regions} from 'src/app/models/regions';
// import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-company-description',
  templateUrl: './company-description.component.html',
  styleUrls: ['./company-description.component.css']
})
export class CompanyDescriptionComponent implements OnInit {
  regions: Regions[] ;
  // countryForm: FormGroup;


  constructor() { }

  ngOnInit(): void {
    // this.fb.group({
    //   countryControl: []
    // });
    // this.regions = [
    //     {
    //       regionName: 'africa',
    //       countries: [{
    //         countryName: 'Iran',
    //         countryID: 1
    //       }]
    //     }
    //   ];
  }

}
