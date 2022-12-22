import { Component, OnInit } from '@angular/core';
import {Customer} from 'src/app/models/customer.model';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  //customersCalculated: Customer[] = [];

  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.customersService.getAllCustomers()
    .subscribe({
      next: (customers) => {
        console.log(customers);
        this.customers = customers;
      },
      error: (response) => {
        console.log(response);
      
      }
    
    
    })


    
  }

  calculateValue(x: number) {
    if(x>100 && x>50) {
    return (((x-100)*2) +(x-50) );
    }
    else if(x>50 && x!>100) {
      return x-50;
    }
    else if(x<50) {
      return 0;
    }
    else {
      return 0;
    }
    
  }

  calculateTotal(x: string) {
    let counter = 0;
    for(let i=0;  i<this.customers.length; i++) {
      if(this.customers[i].name==x) {
        counter = counter + this.calculateValue(this.customers[i].transaction);
      }
    }
    return counter;
  }



}
