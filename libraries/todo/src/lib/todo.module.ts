import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';

import { TodoFilterPipe } from './todo-filter.pipe';
import { TodoCompletedPipe } from './todo-completed.pipe';

import { TodoService } from './todo.service';

// material design
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { GeneralModule } from 'general';




@NgModule({
  declarations: [TodoComponent, TodoListComponent, CreateTodoComponent, TodoFilterPipe, TodoCompletedPipe],
  imports: [
    GeneralModule,
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatListModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatMenuModule,
    MatBadgeModule,
    MatSnackBarModule
  ],
  providers: [TodoService],
  exports: [TodoComponent, CreateTodoComponent, TodoListComponent]
})
export class TodoModule { }
