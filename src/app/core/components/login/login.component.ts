import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../shared/Model/Employee';
import { NgForm, FormGroup } from '@angular/forms';
import { CommonAPIsService } from '../../../shared/services/common-api-service';
import { Router, ActivatedRoute } from '@angular/router';
import { observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
employee:Employee[];
emp:Employee;
//employee:Employee;
//loginForm: FormGroup;
  constructor(private router:Router,private service:CommonAPIsService,private route:ActivatedRoute) { }

  ngOnInit() {
  }
Login(loginForm:NgForm)
{
this.emp = new Employee;
this.emp.email_Id = loginForm.value.email;
this.emp.password = loginForm.value.pswd;
this.service.login(this.emp).subscribe(res=>
{
  if(res)
  {
    this.router.navigate(['/home']);
  }
  else
  {
    alert("Login failed!!!!");
  }
 });

}
register()
{
  this.router.navigate(['/register']);
}
}
