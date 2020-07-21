import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  dataForm: FormGroup;

  constructor(private  fb: FormBuilder) {
    // this.dataForm = this.fb.group({
    //   name: ['', Validators.compose([Validators.required, Validators.min(3)])]
    // });

  }

  ngOnInit(): void {

  }
 // nameValidator(): ValidatorFn{
 //
 //  }
}
