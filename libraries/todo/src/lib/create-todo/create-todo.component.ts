import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoService } from '../todo.service';

import { Todo, TodoStatus } from '../todo';

import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'td-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CreateTodoComponent implements OnInit {

  name = new FormControl('');

  constructor(public snackBar: MatSnackBar, private todoService: TodoService) {}

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  createTodo() {
    let todo = {name: this.name.value, status: TodoStatus.Incomplete} as Todo;
    this.todoService.createTodo(todo);
    this.openSnackBar(this.name.value, 'A todo was created.');
    this.name.patchValue('');
  }

}
