import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-api';
urlApi ="https://jsonplaceholder.typicode.com/todos/1";

  constructor(private httpClient :HttpClient){
    this.httpClient.get(this.urlApi).subscribe({
      next:(res:any)=>{
        console.log(res);
      },
      error:(err :HttpErrorResponse)=>{
        console.log(err);
      }


    });
  }
}
