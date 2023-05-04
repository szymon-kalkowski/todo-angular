import { Component } from '@angular/core';
import { TodoPanelService } from './todo-panel.service';
import { Todo } from './todo';
import { v4 as uuidv4 } from 'uuid';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-panel',
  templateUrl: './todo-panel.component.html',
  styleUrls: ['./todo-panel.component.scss'],
})
export class TodoPanelComponent {
  constructor(
    private todoPanelService: TodoPanelService,
    private fb: FormBuilder
  ) {}

  todoForm!: FormGroup;
  todoList: Todo[] = this.todoPanelService.todoList;

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      body: ['', [Validators.required]],
    });
  }

  addTodo(): void {
    const todo: Todo = {
      id: uuidv4(),
      status: 'todo',
      body: this.todoForm.value.body,
    };
    this.todoPanelService.addTodoItem(todo);
    this.todoList = this.todoPanelService.todoList;
    this.todoForm.reset();
  }

  deleteTodo(id: string): void {
    this.todoPanelService.deleteTodoItem(id);
    this.todoList = this.todoPanelService.todoList;
  }

  updateTodoStatus(id: string) {
    this.todoPanelService.updateTodoItemStatus(id);
    this.todoList = this.todoPanelService.todoList;
  }
}
