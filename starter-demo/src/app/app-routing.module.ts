import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes =  [
  {path:'Home',component:HomeComponent},
  {path:'Parent',component:ParentComponent},
  {path:'',redirectTo:'/',pathMatch:'full'},
  {path:'**',component:NotfoundComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
