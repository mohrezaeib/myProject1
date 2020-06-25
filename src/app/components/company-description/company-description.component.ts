import { Component, OnInit } from '@angular/core';

import {Regions} from 'src/app/models/regions';
// import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-company-description',
  templateUrl: './company-description.component.html',
  styleUrls: ['./company-description.component.css']
})
export class CompanyDescriptionComponent implements OnInit {
  // countryForm: FormGroup;


  constructor() { }
  regions: Regions[] ;
  options = ['op1', 'op2', 'op3'];

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
