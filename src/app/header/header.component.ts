import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllserviceService } from '../allservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private service: AllserviceService,private rut:Router) {}

  ngOnInit(): void {}

  get isLoggedIn() {
    return this.service.isLoggedIn();
  }

  logout(){
    sessionStorage.clear();
    this.rut.navigate(['/']);
  }
}
