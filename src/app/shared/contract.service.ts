import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Contract } from '../models/contract.model';
import { AppSettings } from '../app.settings';

@Injectable()

export class ContractService {
  private contractUrl = '/contracts';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getContracts(): Observable<Contract[]> {
    // return an observable
    return this.http.get(AppSettings.url + this.contractUrl)
      .map( res => res.json().contracts)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getContract(id: number): Promise<Contract> {
    const url = `${AppSettings.url + this.contractUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json().contract as Contract)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
