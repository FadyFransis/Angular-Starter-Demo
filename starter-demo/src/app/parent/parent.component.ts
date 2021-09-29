
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { IFakeUser, IUser } from '../shared/interfaces/IUser';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  users : IUser[] = []
  fakeUsers :IFakeUser[]=[]
  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    //this.users = this.userService.getUsers();
    this.userService.getUsers().subscribe(data => 
      {
        this.users = data
       
      }); 
      this.userService.getFakeUsers().subscribe(data => 
        {
          this.fakeUsers = data
         
        }); 
      
    
  }

}  
 