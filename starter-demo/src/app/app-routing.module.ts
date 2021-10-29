import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontsTextComponent } from './fonts-text/fonts-text.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ParentComponent } from './parent/parent.component';
<<<<<<< HEAD
import { TaskUpworkComponent } from './task-upwork/task-upwork.component';
=======
>>>>>>> 24838df4827d7143b6dd8e6d14ab9017adbd43d6
import { UsersComponent } from './users/users.component';

const routes: Routes =  [
  {path:'Home',component:HomeComponent},
  {path:'Parent',component:ParentComponent},
  {path:'Users',component:UsersComponent},
<<<<<<< HEAD
  {path:'Task',component:TaskUpworkComponent},

=======
>>>>>>> 24838df4827d7143b6dd8e6d14ab9017adbd43d6
  {path:'Text',component:FontsTextComponent,pathMatch:'full'},

  {path:'',redirectTo:'/',pathMatch:'full'},

<<<<<<< HEAD
  {path:'**',}
=======
  {path:'**',component:NotfoundComponent,pathMatch:'full'}
>>>>>>> 24838df4827d7143b6dd8e6d14ab9017adbd43d6
];

@NgModule({
  imports: [RouterModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
