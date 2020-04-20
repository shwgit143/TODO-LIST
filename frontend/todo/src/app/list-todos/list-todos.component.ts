import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  todos: Todo[]

  message: string

  id : number

  todo: Todo

  // todos = [
  //   new Todo(1,'Learn to Dance', false , new Date()),
  //   new Todo(1,'Become an Expert At Angular', false , new Date()),
  //   new Todo(1,'Visit India', false , new Date())

  //   // {id : 1,   description : 'Learn to Dance'},
  //   // {id : 2,   description : 'Become an Expert At Angular'},
  //   // {id : 3,   description : 'Learn to Dance'}

  // ]

  // todo = {

  //     id : 1,
  //     description : 'Learn to Dance'
  // }

  constructor(
    private todoService: TodoDataService,
    private router : Router 
  ) { }

  ngOnInit() {
    
    this.refreshTodos();
    // this.todoService.retriveTodo('in28minutes',10).subscribe(
      // data => this.todo = data
    // )
  }
  refreshTodos() {

    this.todoService.retrieveAllTods('in28minutes',this.id).subscribe(
      responce => {
        console.log(responce)
        this.todos = responce;

      }
  //  {
  //  this.todoService.retrieveAllTods('in28minutes').subscribe(
  //     responce =>{
  //     console.log(responce)
  //     this.todos = responce;
  //   }

  //  )
    )
}
  deleteTodo(id){
      console.log(`delete todo ${id}` )
    this.todoService.deleteTodo('in28minutes', id).subscribe(
        responce => {
          console.log(responce)
          this.message = `Delete of Todo ${id} Sucessfull`;
          this.refreshTodos();
        }
      )
    }

    updateTodo(id){
      console.log(`delete todo ${id}`)
       this.router.navigate(['todos',id])
    } 

    addTodo() {
      this.router.navigate(['todos',-1])
    }

  }