import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-todo',
  templateUrl: './save-todo.component.html',
  styleUrls: ['./save-todo.component.css']
})
export class SaveTodoComponent implements OnInit {

  constructor(private http: Http, private router: Router) { }

  private headers = new Headers({'Content-Type': 'application/json'});
  ngOnInit() {
  }
  save(value) {
      console.log(value);
      this.http.post('http://127.0.0.1:8000/add-todo/', value,  this.headers);
      /*this.router.navigateByUrl('/todo');*/
  }

}
