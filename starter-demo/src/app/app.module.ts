import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { StarterComponent } from './starter/starter.component';
import { FontsTextComponent } from './fonts-text/fonts-text.component';
import { IconListLinkComponent } from './icon-list-link/icon-list-link.component';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    NotfoundComponent,
    HomeComponent,
    UsersComponent,
    StarterComponent,
    FontsTextComponent,
    IconListLinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
