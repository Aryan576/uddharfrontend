import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllserviceService {

  constructor(private http:HttpClient) { }

  signup(model:any):Observable<any>{
    return this.http.post(`${environment.base_url}signup`,model);
  }

  login(model:any):Observable<any>{
    return this.http.post(`${environment.base_url}login`,model);
  }

  petService(model:any):Observable<any>{
    return this.http.post(`${environment.base_url}service`,model);
  }

  isLoggedIn(){
    if(sessionStorage.getItem('isLogin')){
      return true;
    }
    return false;
  }
}
