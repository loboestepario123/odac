import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresentacionService implements HttpInterceptor{

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Logic to intercept and modify the request
    // or process the response
    return next.handle(request);
  }
  constructor(private http:HttpClient ) {}

  getRepos(): Observable<any> {
    const r =  this.http.get('http://localhost:30000/api')
    console.log(r);

    return r;
  }
}
