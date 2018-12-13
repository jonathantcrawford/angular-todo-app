import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarshipsModule } from './starships/starships.module';
import { StarshipsService } from './starships/starships.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StarshipsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
