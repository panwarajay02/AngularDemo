import { Injectable } from '@angular/core';
import { Person } from '../shared/dish';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import 'rxjs/add/operator/map';

@Injectable()
export class PersonMenuService {

  constructor(private http : Http){}
  mapPersons:Person[];
  urlPeople:string="http://localhost:3000/people";
 
  getHeroes(): Observable<Person[]>{
    return this.http
      .get(`${this.urlPeople}`)
      .map((response:Response)=><Person[]>response.json());
  
  }
  
  // getPeopleWithPublicAccess(): Promise<Person[]> {
  //   for (const person of this.dishes) {
  //     return Promise.resolve(this.dishes.filter(person => person.access === true));
  //   }
  // }
}
