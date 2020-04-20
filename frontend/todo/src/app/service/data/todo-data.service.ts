import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})

export class TodoDataService 
{
  //arg0
  retriveTodo(username : string, id: number) {
    
    throw new Error("Method not implemented.");
  }

  constructor(
    private http: HttpClient 
  ) { }

  retrieveAllTods(useranme, id) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${useranme}/todos/${id}`);
    // console.log("Execute Hello World Bean Service")
  }

  deleteTodo(useranme, id) {
    return this.http.delete(`http://localhost:8080/users/${useranme}/todos/${id}`);
  }

  retriveTodo(useranme, id) {
  console.log(id);
    return this.http.get<Todo>(`http://localhost:8080/users/${useranme}/todos/${id}`);
  }

  updateTodo(useranme, id, todo) {
    console.log(id);
    return this.http.put(`http://localhost:8080/users/${useranme}/todos/${id}`,
      todo);
  }
  
}
