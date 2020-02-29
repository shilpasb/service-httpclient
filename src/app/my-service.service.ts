import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class MyServiceService {

  constructor(private httpClient: HttpClient) {}
  get_data(){
    const api = ' https://jsonplaceholder.typicode.com/users';
    return this.httpClient.get(api);    
  }
}