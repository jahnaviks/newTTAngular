import { Component, OnInit } from "@angular/core";
import { Employee } from '../../../../shared/Model/Employee';
import { CommonAPIsService } from "../../../../shared/services/common-api-service";
import { Router } from "@angular/router";

@Component({
    selector:'app-updateDetails',
    templateUrl:'./updateDetails.component.html',
    styleUrls: ['./updateDetails.component.css']
})
export class updateDetailsComponent implements OnInit{
    eId:string="";
    bindEmail:string="";
    name:string="";
    mobile:string="";
    email :string;
    emp:Employee;
        constructor(private service:CommonAPIsService, private router:Router) { }
  
    ngOnInit() {
      this.getEmployeeDetails();
    }
  
   getEmployeeDetails(){
      this.service.currentMessage.subscribe(email => {
        this.email = email;
        console.log(email);
        //this.emp.email_Id = this.email;
        this.service.getEmployeeDetails(this.email).subscribe((res) =>
        {
          this.emp = new Employee;
        this.emp = {
          empId : res['empId'],
          email_Id : res['email_Id'],
          password : res['password'],
          ename: res['ename'],
          mobile:res['mobile'],
          roleId:res['roleId'],
          projectId:res['projectId'],
          roleName:res['roleName'],
          projectName:res['projectName'],
          isActive:res['isActive'],
          ae_email_Id:res['ae_email_Id']
        }
      });
      });  
      
    }
}