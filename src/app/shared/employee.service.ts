import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AppSettings } from '../app.settings';
import { Employee } from '../models/employee.model';

@Injectable()

export class EmployeeService {
  private emloyeeUrl = '/employees';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getEmployees(): Observable<Employee[]> {
    // return an observable
    return this.http.get(AppSettings.url + this.emloyeeUrl)
      .map( res => res.json().employees)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getEmployee(id: number): Promise<Employee> {
    const url = `${AppSettings.url + this.emloyeeUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json().employee as Employee)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
