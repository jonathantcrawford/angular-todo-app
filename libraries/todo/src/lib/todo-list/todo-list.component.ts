import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo, TodoStatus } from '../todo';

@Component({
  selector: 'td-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];

  incompleteCount = 0;
  completeCount = 0;


  filterOption;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.todos.subscribe((todos) => {
      this.todos = todos;
      this.incompleteCount = this.todos.filter((todo) => {
        return todo.status == TodoStatus.Incomplete;
      }).length;
      this.completeCount = this.todos.filter((todo) => {
        return todo.status == TodoStatus.Complete;
      }).length;
    });
  }

  sortBy(status: string) {
    switch(status) {
      case 'incomplete':
        this.filterOption = TodoStatus.Incomplete;
        break;
      case 'complete':
        this.filterOption = TodoStatus.Complete;
        break;
      default: undefined;
        this.filterOption = undefined;
    }

  }

}
