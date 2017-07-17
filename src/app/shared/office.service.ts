import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AppSettings } from '../app.settings';
import { Office } from '../models/office.model';

@Injectable()

export class OfficeService {
  private officeUrl = '/offices';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getOffices(): Observable<Office[]> {
    // return an observable
    return this.http.get(AppSettings.url + this.officeUrl)
      .map( res => res.json().offices)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getOffice(id: number): Promise<Office> {
    const url = `${AppSettings.url + this.officeUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json().office as Office)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
