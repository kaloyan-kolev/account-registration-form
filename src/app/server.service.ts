import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class ServerService {
  private url = "http://jsonplaceholder.typicode.com/users";

  constructor(private http: Http) { }

  checkUsers(email: string) {
    return this.http
      .get(this.url)
      .map(res => res.json())
      .map(users => users.filter(user => user.email === email))
      .map(users => !users.length);
  }
}
