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

  saveTodo(){
    if(this.newTodo){
      let todo = new ToDo();
      todo.name = this.newTodo;
      todo.isCompleted = true;
      this.todos.push(todo);
      this.newTodo = ''
    } else{
      alert("Please Enter Todo")
    }
  }

  done(id:number){
    this.todos[id].isCompleted = !this.todo[id].isCompleted;
  }

  remove(id:number){
    this.todos = this.todos.filter((v,i)=> i !==id);
  }
}
