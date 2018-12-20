import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoModule } from 'todo';

import { LazyLibrariesRoutingModule } from './lazy-libraries-routing.module';

import { TodoAppComponent } from './lazy-libraries-routing.module';

@NgModule({
  declarations: [TodoAppComponent],
  imports: [
    CommonModule,
    LazyLibrariesRoutingModule
  ]
})
export class LazyLibrariesModule { }
