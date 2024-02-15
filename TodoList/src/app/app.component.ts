import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDo } from './Todo';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TodoList';
  todos: ToDo[] = [];
  newTodo: string;
}
