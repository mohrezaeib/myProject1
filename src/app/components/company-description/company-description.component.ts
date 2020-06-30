import {Component, OnInit, ViewChild} from '@angular/core';

import {Region} from 'src/app/models/region';
import {NgForm, FormGroup, FormControl, Validators} from '@angular/forms';
// import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-company-description',
  templateUrl: './company-description.component.html',
  styleUrls: ['./company-description.component.css']
})
export class CompanyDescriptionComponent implements OnInit {
  // countryForm: FormGroup;
@ViewChild('f') subscribeForm: NgForm;
 selectedRegion: Region ;
  regions: Region[]  = [{regionName: 'Asia',
    countries: [
      {countryID: 0, countryName: 'Russia'},
      {countryID: 1, countryName: 'China'},
      {countryID: 2, countryName: 'Iran'}
    ]

  },
  {regionName: 'Europe',
  countries: [
    {countryID: 4, countryName: 'Germany'},
    {countryID: 5, countryName: 'France'},
    {countryID: 6, countryName: 'UK'}
  ]
  }];
  countryForm: FormGroup;
  options = ['op1', 'op2', 'op3'];
  constructor() { }
  ngOnInit(): void {
      this.countryForm = new FormGroup({
        regionSelector: new FormControl(null, [Validators.required] ),
        countrySelector: new FormControl(null),
      });
      this.countryForm.get('regionSelector').valueChanges.subscribe((value) => {
      if (value) { console.log(value);
                   this.selectedRegion = this.regions.filter(r => r.regionName === value)[0] ;
      }
      else {console.log('status'); }
    });

  }

    onSubscribe(){
    console.log(this.subscribeForm.form.controls.regionSelect.value);
    if ( this.subscribeForm.valid){
      this.subscribeForm.reset();
    }
    }
  countryShow(){
    console.log(this.countryForm);
  }
 }
