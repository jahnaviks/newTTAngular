
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { map, catchError } from 'rxjs/operators'
import { AppConstants } from '../../constants/appconstants';
import { Employee } from '../Model/Employee';
import { APIHeader } from './http-api-header';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class CommonAPIsService {
    endpoint:any=AppConstants.localUrl;
    header:any=APIHeader;
    emp:Employee;

    private messageSource = new BehaviorSubject('email');
    currentMessage = this.messageSource.asObservable();

    constructor(private _http:HttpClient){ }

    getAPI(method:string){
        return this._http.get(this.endpoint + method)
        .pipe(map(response => response))
        .pipe(catchError(error =>error))
      } 

      getEmployeeList(){
            return this._http.get<Employee[]>(this.endpoint + "EmployeeList");
      }

      getEmployeeDetails(email:string)
      {
          this.emp = new Employee;
          this.emp.email_Id = email;
          var body = JSON.stringify(this.emp);
          console.log(body);
          return this._http.post<Employee[]>(this.endpoint + "EmployeeDetails",body,this.header)
      }

      getTeamList(emp:Employee)
      {
          var body = JSON.stringify(emp);
          console.log(body);
          return this._http.post<any[]>(this.endpoint + "EmployeeTeam",body,this.header);
         // .pipe(map(this.extractData));
      }
    
    login(emp:Employee)
    {
        //var currentMessage = this.messageSource.asObservable()
        this.messageSource.next(emp.email_Id);
        var body=JSON.stringify(emp);
        return this._http.post<Employee>(this.endpoint + "login",body,this.header);
        
    }

    Register(emp:Employee)
    {
        var body=JSON.stringify(emp);
        return this._http.post<Employee>(this.endpoint + "Register",body,this.header);
    }

    private handleError(error:Response){
        return 'This Api Call has some error'+error.status;
    }
    private extractData(res: Response) {
        let body = res;
        return body || { };
      }
}