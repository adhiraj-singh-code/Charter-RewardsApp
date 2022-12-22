import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseApiUrl + '/api/Customers');



  }
}
