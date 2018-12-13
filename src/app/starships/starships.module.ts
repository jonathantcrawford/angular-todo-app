import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsService } from './starships.service';
import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipsComponent } from './starships.component';
import { HttpClientModule } from '@angular/common/http';
import { StarshipsServicesModule } from './starships.services.module';

@NgModule({
  declarations: [StarshipsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StarshipsServicesModule,
    StarshipsRoutingModule
  ]
})
export class StarshipsModule { }
