import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllserviceService } from '../allservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  constructor(private service: AllserviceService,private router:Router) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    if(this.myForm.valid){
      this.service.login(this.myForm.value).subscribe(res => {
        //console.log(res.status);

        if(res.msg == "User Login"){
          sessionStorage.setItem("isLogin","true");
          console.log(res.status);
          console.log(res);
          this.router.navigate(['/'])
          console.log();
        }
        else{
          console.log("error");
        }
      });
    }

  }
}
