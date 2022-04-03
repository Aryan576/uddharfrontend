import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AllserviceService } from '../allservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;

  constructor(private service:AllserviceService) { }

  ngOnInit(): void {

    this.myForm = new FormGroup({
      firstname: new FormControl('',Validators.required),
      lastname: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      gender: new FormControl('',Validators.required),
      age: new FormControl('',Validators.required),
      mobileno: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
    })

  }

  signup(){
    this.service.signup(this.myForm.value).subscribe(res => {
      console.log(this.myForm.value);

    })
  }

}
