import { Component,OnInit} from '@angular/core';
import { MyServiceService } from './my-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'HttpClient with service';
  userList;

  constructor(private appService: MyServiceService){}
  ngOnInit(){ 
    console.log("hii");
     this.appService
      .get_data()
      .subscribe(
        data => this.userList = data
      ); }

}
