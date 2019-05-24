import { Component, OnInit, Input } from '@angular/core';
import { CommonAPIsService } from '../../../shared/services/common-api-service';
import { Employee } from '../../../shared/Model/Employee';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email :string;
  emp:Employee;
  //employeelist$: Observable<Employee[]>;
  showListButton : boolean = false;
  showTeamList : boolean = false;
  showEditDetails : boolean = false;
  Array : any[];
  //@Input() emp:Employee;
  employeelist:Employee[];
  constructor(private service:CommonAPIsService, private router:Router) { }

  ngOnInit() {
    //this.emp.email_Id = null;
    //console.log("email" + this.emp.email_Id);
    
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
      if(this.emp.roleId == '2' || this.emp.roleId == '3')
      {
        this.showListButton=true;
      } 
    });
    });  
    
  }

  Back(){
    this.router.navigate(['/login']);
  }

  getTeamMembers(){
    this.getEmployeeDetails();
    this.showEditDetails = false;
    this.showTeamList = true;
  }

  toHideSection(){
    if(this.showTeamList == true)
    {
      this.showEditDetails = true;
      this.showTeamList = false;
    }
    if(this.showEditDetails == true)
    {
      this.showEditDetails = false;
      this.showTeamList = true;
    }
  }

  showUpdateSection(){
    //this.emp = new Employee;
    //this.getEmployeeDetails();
    this.showEditDetails = true;
    this.showTeamList = false;
  }
  
}
