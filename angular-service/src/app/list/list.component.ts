import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { interval } from 'rxjs'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tasksString:String;
  tasks:any[];
  tempdata:any;
  view:String = "False";

  constructor(public api:ApiService) {

    interval(5000)
      .subscribe(() => {
        this.api.GetTasks().subscribe( data => {
            this.tempdata = data;
            this.tasks = JSON.parse(this.tempdata);
          },
          error => console.log(error)
        );
      });
  }

  ngOnInit() {
    this.api.GetTasks().subscribe( data => {
      this.tempdata = data;
      this.tasks = JSON.parse(this.tempdata);
      },
        error => console.log(error)
    );
  }

  public SetTaskComplete(t):void {
    console.log(t);
    this.api.PostUpdate(t).subscribe( data => data);
    //t.completed = true;
    console.log("true" + t );
  }

  public SetTaskIncomplete(t):void {
    //this.api.postUpdate(t);
    //t.completed = false;
    console.log("false");
  }


  public SetView(str:String){
    this.view = str;
  }

}
