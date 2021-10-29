import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontsTextComponent } from './fonts-text/fonts-text.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ParentComponent } from './parent/parent.component';
import { TaskUpworkComponent } from './task-upwork/task-upwork.component';
import { UsersComponent } from './users/users.component';

const routes: Routes =  [
  {path:'Home',component:HomeComponent},
  {path:'Parent',component:ParentComponent},
  {path:'Users',component:UsersComponent},
  {path:'Task',component:TaskUpworkComponent},

  {path:'Text',component:FontsTextComponent,pathMatch:'full'},

  {path:'',redirectTo:'/',pathMatch:'full'},

  {path:'**',}
];

@NgModule({
  imports: [RouterModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
