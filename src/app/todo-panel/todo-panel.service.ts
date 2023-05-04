import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoPanelService {
  constructor() {}

  getData(): Todo[] {
    const todoList: string | null = localStorage.getItem('todoList');
    if (todoList) {
      return JSON.parse(todoList);
    }
    localStorage.setItem('todoList', JSON.stringify([]));
    return [];
  }

  todoList: Todo[] = this.getData();

  addTodoItem(todo: Todo): void {
    this.todoList.push(todo);
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  deleteTodoItem(id: string): void {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  updateTodoItemStatus(id: string): void {
    this.todoList = this.todoList.map((todo) => {
      if (todo.id === id) {
        todo.status = todo.status === 'todo' ? 'done' : 'todo';
      }
      return todo;
    });
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }
}
