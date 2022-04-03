import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AllserviceService } from '../allservice.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  myForm:FormGroup

  constructor(private service:AllserviceService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      username: new FormControl('',Validators.required),
      animaltype: new FormControl('',Validators.required),
      services: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      mobileno:new FormControl('',Validators.required),
      problem: new FormControl('',Validators.required)
    })
  }

  submit(){
    // console.log(this.myForm.value);
    this.service.petService(this.myForm.value).subscribe(res => {
      console.log(res.data);

    })
  }
}
