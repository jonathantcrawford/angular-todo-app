import { Pipe, PipeTransform } from '@angular/core';
import { Todo, TodoStatus } from './todo';

@Pipe({
  name: 'todofilter',
  pure: false // false...because Todo[] reference is not changing. 
              // a 'pure' pipe does not recognize changes to the array elements.
})
export class TodoFilterPipe implements PipeTransform {
  transform(todos: Todo[], status: TodoStatus): Todo[] {
    if(!todos) return [];
    if(status === undefined) return todos;
    
    return todos.filter(todo => {
          return todo.status == status;
    });
   } 
}