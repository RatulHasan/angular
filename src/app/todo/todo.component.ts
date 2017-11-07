import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {

    private req$: any;
    todos: any;
    constructor(private http: Http) {}
    ngOnInit() {
        this.req$ = this.http.get('http://127.0.0.1:8000/todo-list-angular/').subscribe(data => {
            /*console.log(data.json());*/
            this.todos = data.json();
        });
    }
    update_status(id) {
        console.log(id);
        this.http.get('http://127.0.0.1:8000/task-done/' + id);
    }
    delete_todo(id) {
        console.log(id);
        this.http.get('http://127.0.0.1:8000/delete-todo/' + id);
    }
    ngOnDestroy() {
        this.req$.unsubscribe();
    }
}