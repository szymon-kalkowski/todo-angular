type TodoStatus = 'todo' | 'done';

export interface Todo {
  id: string;
  status: TodoStatus;
  body: string;
}

export type TodoOption = 'all' | 'todo' | 'done';
