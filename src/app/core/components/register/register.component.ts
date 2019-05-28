import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../shared/Model/Employee';
import { FormGroup, NgForm } from '@angular/forms';
import { CommonAPIsService } from '../../../shared/services/common-api-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
employeeObject:Employee;
email_Id:string;
ename:string;
mobile:string;
password:string;
roleName:string;
projectName:string;
ae_email_Id:string;
  constructor(private serviceAPI:CommonAPIsService, private router:Router) { }

  ngOnInit() {
  }
  Save(regForm:NgForm)
  {
    if(regForm.valid)
    {
      this.FormToModel(regForm);
      this.serviceAPI.Register(this.employeeObject).subscribe(res =>
      {
        console.log(res);
        //result:string;
        if(res)
        {
          console.log(this.employeeObject);
          alert("Successfully Registered!!!!");
          this.email_Id = "";
          this.ename = "";
          this.mobile = "";
          this.password = "";
          this.roleName = "";
          this.projectName = "";
          this.ae_email_Id = "";
        }
        else
        {
          alert("Email Id already exists")
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
    this.employeeObject.email_Id = regForm.value.email;
    this.employeeObject.ename = regForm.value.empname;
    this.employeeObject.mobile = regForm.value.PhoneNo;
    this.employeeObject.password = regForm.value.pswd;
    this.employeeObject.roleName = regForm.value.rname;
    this.employeeObject.projectName = regForm.value.pname;
    this.employeeObject.ae_email_Id = regForm.value.aeEmail;
    return this.employeeObject;
  }
  
  Back(){
    this.router.navigate(['/login']);
  }
}

