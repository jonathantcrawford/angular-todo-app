import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Component, OnInit } from '@angular/core';
import { CreateTodoComponent } from 'todo';
import { TodoListComponent } from 'todo';
import { TodoModule } from 'todo';

@Component({
  selector: 'app-todo',
  template: `
  <td-create-todo></td-create-todo>
  <td-todo-list></td-todo-list>
  `
})
export class TodoAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}

const routes: Routes = [
    {path: '', redirectTo: 'app', pathMatch: 'full'},
    {path: 'create', component: CreateTodoComponent},
    {path: 'list', component: TodoListComponent},
    {path: 'app', component: TodoAppComponent}
  ];

@NgModule({
  imports: [
    TodoModule,
    RouterModule.forChild(routes)
  ],
  exports: [TodoModule, RouterModule]
})
export class LazyLibrariesRoutingModule { }
