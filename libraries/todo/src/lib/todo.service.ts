import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Todo, TodoAPIResponse } from './todo';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todosSource = new BehaviorSubject<Todo[]>([]);
  public readonly todos = this.todosSource.asObservable();
  todoKey = 1;

  constructor(private http: HttpClient) { 
    this.http.get<TodoAPIResponse>("/todos").subscribe(res => {
      this.todosSource.next(_.values(res.results));
      this.todoKey = res.todoKey;
    });
  }

  createTodo(todo: Todo){
    this.todoKey++;
    todo.id = this.todoKey;
    let _todos = this.todosSource.getValue();
    _todos.push(todo);
    this.todosSource.next(_todos);

    this.http.post<TodoAPIResponse>(
      '/todos', 
      {todoKey: this.todoKey, results: _todos}, 
      {headers: {'Content-Type': 'application/json'}}
    ).subscribe();
  }

  updateTodo(todo: Todo) {
    let _todos = this.todosSource.getValue().filter((_todo, index, todos) => {
      return _todo.id != todo.id;
    });
    _todos.push(todo);
    _todos = _todos.sort((prevTodo, curTodo) => {
      if (prevTodo.id < curTodo.id)
        return -1;
      if (prevTodo.id > curTodo.id)
        return 1;
      return 0;
    });
    this.todosSource.next(_todos);

    this.http.post<TodoAPIResponse>(
      '/todos', 
      {todoKey: this.todoKey, results: _todos}, 
      {headers: {'Content-Type': 'application/json'}}
    ).subscribe();
  }

  deleteTodo(todo: Todo) {
    let _todos = this.todosSource.getValue().filter((_todo, index, todos) => {
      return _todo.id != todo.id;
    });
    this.todosSource.next(_todos);

    this.http.post<TodoAPIResponse>(
      '/todos', 
      {todoKey: this.todoKey, results: _todos}, 
      {headers: {'Content-Type': 'application/json'}}
    ).subscribe();
  }


}