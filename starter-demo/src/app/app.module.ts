import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';




const appRoutes:Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Parent',component:ParentComponent},
  {path:'',redirectTo:'/',pathMatch:'full'},
  {path:'**',component:NotfoundComponent,pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    NotfoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
