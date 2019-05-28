import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Employee } from '../../../../shared/Model/Employee';
import { CommonAPIsService } from "../../../../shared/services/common-api-service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
    selector:'app-updateDetails',
    templateUrl:'./updateDetails.component.html',
    styleUrls: ['./updateDetails.component.css']
})
export class updateDetailsComponent implements OnInit{
  empId:string="";
  ename:string="";
  mobile:string="";
  email_Id :string;
  email:string;
  Password:string;
  emp:Employee;
  employeeObject:Employee;
  password:string;

  @Output() buttonClick = new EventEmitter<void>();
        
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
        this.email_Id=this.emp.email_Id;
      this.empId = this.emp.empId;
      this.ename = this.emp.ename;
      this.mobile = this.emp.mobile;
      this.Password = this.emp.password;
      });
      });  
      
    }
    Save(regForm:NgForm){
      if(regForm.valid)
    {
      this.FormToModel(regForm);
      this.service.UpdateSelfDetails(this.employeeObject).subscribe(res =>
      {
        console.log(res);
        //result:string;
        if(res)
        {
          console.log(this.employeeObject);
          alert("Successfully Updated!!!!");
          this.email_Id = "";
          this.empId="";
          this.ename = "";
          this.mobile = "";
          this.password = "";
          
        }
        
      });
      
    }
    else
    {
      alert("Form is not valid");
    }
  }


  FormToModel(regForm:NgForm):Employee
  {
    this.employeeObject = new Employee;
    this.employeeObject.empId = regForm.value.eId;
    this.employeeObject.email_Id = regForm.value.email;
    this.employeeObject.ename = regForm.value.empname;
    this.employeeObject.mobile = regForm.value.PhoneNo;
    this.employeeObject.password = regForm.value.pswd;
    return this.employeeObject;
  }
  
}