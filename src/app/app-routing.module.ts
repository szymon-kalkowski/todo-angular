import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoPanelComponent } from './todo-panel/todo-panel.component';

const routes: Routes = [
  { path: 'todo-panel', component: TodoPanelComponent },
  { path: '', redirectTo: '/todo-panel', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
