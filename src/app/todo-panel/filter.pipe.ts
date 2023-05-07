import { Pipe, PipeTransform } from '@angular/core';
import { Todo, TodoOption } from './todo';
import { FormControl } from '@angular/forms';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(todoList: Todo[], option: TodoOption | null): Todo[] {
    if (option === 'all') {
      return todoList;
    } else {
      return todoList.filter((todo) => todo.status === option);
    }
  }
}
