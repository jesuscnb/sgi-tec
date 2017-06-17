import { FormBase } from './../filters/app.form.base';
import { Form } from './Form';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import {isUndefined} from 'util';

@Injectable()
export class FormService {

  constructor(private http: Http) { }

  getAllPosts(): Observable<Form[]> {
    return this.http.get('/forms')
      .map((res: Response) => res.json());
  }

  delete(_id): Observable<Form[]> {
    return this.http.delete('/forms/' + _id)
      .map((res: Response) => res.json());
  }

public save(entity: any) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    if (entity._id == null || isUndefined(entity._id)) {
      return this.http.post('forms/save/', JSON.stringify(entity), { headers: headers})
        .map(res => res.json())

    } else {
      return this.http.put('forms/update/', JSON.stringify(entity), {headers: headers})
        .map(res => res.json())
    }

  }

}
