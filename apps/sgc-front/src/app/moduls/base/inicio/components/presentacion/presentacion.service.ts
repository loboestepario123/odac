import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PresentacionService{

  constructor(private http:HttpClient){}

  getRepos() {
   const r= this.http.get('http://localhost:30000/api/').subscribe(
   (r1=>{
    console.log(r1);

   })
   );

    return r
  }
}
