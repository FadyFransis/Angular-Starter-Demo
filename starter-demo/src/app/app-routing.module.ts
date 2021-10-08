import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontsTextComponent } from './fonts-text/fonts-text.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ParentComponent } from './parent/parent.component';
import { UsersComponent } from './users/users.component';

const routes: Routes =  [
  {path:'Home',component:HomeComponent},
  {path:'Parent',component:ParentComponent},
  {path:'Users',component:UsersComponent},
  {path:'Text',component:FontsTextComponent,pathMatch:'full'},

  {path:'',redirectTo:'/',pathMatch:'full'},

  {path:'**',component:NotfoundComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
