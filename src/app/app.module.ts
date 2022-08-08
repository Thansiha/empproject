import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { SearchempComponent } from './searchemp/searchemp.component';
import { EditempComponent } from './editemp/editemp.component';
import { DeleteempComponent } from './deleteemp/deleteemp.component';
import { ViewallempComponent } from './viewallemp/viewallemp.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {
  path:"",
  component:AddemployeeComponent
  },
  {
    path:"Search",
    component:SearchempComponent
  },
  {
    path:"edit",
    component:EditempComponent
  },
  {
    path:"delete",
  component:DeleteempComponent
  },
  {
    path:"view",
    component:ViewallempComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    SearchempComponent,
    EditempComponent,
    DeleteempComponent,
    ViewallempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
