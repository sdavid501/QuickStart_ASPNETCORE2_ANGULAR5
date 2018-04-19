import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { HelloService } from '../_services/hello.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [HelloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
