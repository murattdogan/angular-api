import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-api';
urlApi ="https://jsonplaceholder.typicode.com/todos";

constructor(private httpClient :HttpClient)
{

  let headers = {
    headers :{
      "authorization":"deger"
    }
  }

  this.httpClient.get(this.urlApi,headers).subscribe(res=>{
    console.log(res);
  })
}





  }










