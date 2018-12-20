import { Pipe, PipeTransform } from '@angular/core';

import { Todo, TodoStatus } from './todo';
@Pipe({
  name: 'todoCompleted',
  pure: false
})
export class TodoCompletedPipe implements PipeTransform {
  transform(todoStatus: TodoStatus): boolean {
    return todoStatus == TodoStatus.Complete;
   }
}