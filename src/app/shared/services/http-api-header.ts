import { HttpInterceptor, HttpHandler ,HttpRequest, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class APIHeader implements HttpInterceptor{
    intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const authReq = req.clone({
            headers: new HttpHeaders({
              'content-type':'application/json'
            })            
          });     
      
        return next.handle(authReq);
      }      
    constructor(){
    }  
}

