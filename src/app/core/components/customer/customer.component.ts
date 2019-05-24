import { CommonAPIsService } from '../../../shared/services/common-api-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers:any=[];
  constructor(private _commonAPI:CommonAPIsService) { 

  }

  ngOnInit() {
    this._commonAPI.getAPI('customer').subscribe(response=>{
      this.customers=response["customers"];
    },error=>error)
    console.log(this.customers)
  } 
}
