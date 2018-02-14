import { Injectable } from '@angular/core';
import { Person } from '../shared/dish';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonMenuService {

  constructor(private http: Http) { }
  mapPersons: Person[];
  urlPeople: string = "http://localhost:3000/people";

  getHeroes(): Observable<Person[]> {
    return this.http
      .get(`${this.urlPeople}`)
      .map((response: Response) => <Person[]>response.json());
  }
}
