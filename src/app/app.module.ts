import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarshipsService } from './starships/starships.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TodoModule } from 'todo';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TodoModule
  ],
  providers: [StarshipsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
