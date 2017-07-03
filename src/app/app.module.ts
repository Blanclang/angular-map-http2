import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRouting } from './app.router';
import { CommonComponent, PageComponentList } from './containers/Core';
import { ManagerPageComponentList } from './managers/Index';

import { AppComponent } from './app.component';
const Routers = AppRouting.Router();

@NgModule({
  declarations: [AppComponent, PageComponentList, ManagerPageComponentList, CommonComponent],
  imports: [
    BrowserAnimationsModule, BrowserModule, FormsModule, HttpModule, Routers
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
