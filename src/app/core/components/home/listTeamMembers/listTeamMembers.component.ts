import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonAPIsService } from '../../../../shared/services/common-api-service';
import { Employee } from '../../../../shared/Model/Employee';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms'

@Component({
    selector:'app-listTeamMembers',
    templateUrl:'./listTeamMembers.component.html',
    styleUrls: ['./listTeamMembers.component.css']
})
export class listTeamMembersComponent implements OnInit{
 
    email_Id:string="";
    ename:string="";
    roleName:string="";
    projectName:string="";
    isActive:string="";
    ae_email_Id:string="";
    email : string;
    emp :Employee;
    showEditPage : boolean;
    showListPage : boolean;
    //array:Array<any> = null;
    emplist:Employee[] =[];
    arrlist:any;
    employeelist:MatTableDataSource<Employee>;//employee[];
    displayedColumns: string[] = ['empId','email_Id','ename','mobile','isActive','roleId','roleName','projectId','projectName','Edit'];
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;
    //i:number;
 constructor(private service:CommonAPIsService){}
    ngOnInit(){
//this.getEmployeeDetails();
this.showEditPage = false;
//this.showListPage = true;
this.service.currentMessage.subscribe(email => {
  this.emp = new Employee;
  this.email = email;
  console.log(email);
  //this.emp.email_Id = this.email;
  this.service.getEmployeeDetails(this.email).subscribe((res) =>
  {
    //let data = res
    //this.emp = data;
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
  this.service.getTeamList(this.emp).subscribe((tempdata) =>
    {
      let data = tempdata
      //this.array =[];
      console.log(tempdata);
      console.log(data);
      //this.emplist = tempdata;
     this.arrlist = data;
     this.employeelist = this.arrlist;
    });
});

});  

}
ShowRegForm(Employee){
  //this.showListPage = false;
  this.showEditPage= true;
  this.email_Id = Employee.email_Id;
  this.ename = Employee.ename;
  this.isActive= Employee.isActive;
  this.roleName = Employee.roleName;
  this.projectName = Employee.projectName;
  this.ae_email_Id = Employee.ae_email_Id;

}
UpdateTeamDetails(regForm:NgForm){
 // this.showListPage = true;
  this.showEditPage= false;
this.emp = new Employee;
this.emp.ae_email_Id = regForm.value.AEemail;
this.emp.ename = regForm.value.empname;
this.emp.email_Id = regForm.value.email;
this.emp.roleName = regForm.value.rname;
this.emp.projectName = regForm.value.pname;
this.emp.isActive = regForm.value.active;
}
 }

//  getEmployeeDetails(){
    
// }