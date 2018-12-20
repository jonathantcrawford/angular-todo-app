import { Component, OnInit, Input } from '@angular/core';
import { Todo, TodoStatus } from './todo';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { TodoService } from './todo.service';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'td-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;


  mode = 'display';

  constructor(public snackBar: MatSnackBar, private todoService: TodoService) { }

  ngOnInit() {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  setStatus(matCheckBoxChange: MatCheckboxChange) {
    this.todo.status = matCheckBoxChange.checked ? TodoStatus.Complete : TodoStatus.Incomplete;
    this.openSnackBar(this.todo.name, 'A todo has been marked as ' + this.todo.status + 'd.');
    this.todoService.updateTodo(this.todo);
  }

  get tooltip() {
    return (this.todo.status == TodoStatus.Complete ? TodoStatus.Incomplete : TodoStatus.Complete);
  }

  deleteTodo() {
    this.openSnackBar(this.todo.name, 'A todo was deleted.');
    this.todoService.deleteTodo(this.todo);
  }

  setMode(mode: string) {
    this.mode = mode;
  }

  patchTodo(properties: {}) {
    for(let prop in properties) {
      this.todo[prop] = properties[prop];
    }
    this.setMode('display');
    this.todoService.updateTodo(this.todo);
  }

}
