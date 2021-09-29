import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFakeUser, IUser } from '../interfaces/IUser';

import 'rxjs-compat';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  getUsers  = () :Observable<IUser[]>=>
  {
    let users =   this.http.get<IUser[]>('assets/users.json').map(x=> x );
    return users;
  }
  getFakeUsers  =() :Observable<IFakeUser[]> =>
  {
    let fakeUsers =  this.http.get<any>('https://reqres.in/api/users?page=2').map(x=> x.data ).catch((x:Response)=>x.json());
    return fakeUsers;
  } 
}
