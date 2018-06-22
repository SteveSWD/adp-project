import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tasks:Task[];

  constructor(public api:ApiService) {
    this.tasks = [
      {task_id: 1, task_name: "Lorem", task_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor, tortor sed finibus elementum, ligula metus dapibus neque, sed ornare velit metus in eros.", complete: false},
      {task_id: 2, task_name: "Suspendisse", task_text: "Suspendisse pharetra urna vel nulla ornare luctus. Aenean consectetur nec risus id bibendum. Aenean eleifend arcu eu molestie tincidunt.", complete: true},
      {task_id: 3, task_name: "Mauris", task_text: "Mauris fringilla lorem non augue ultrices gravida. Aliquam a varius mauris. Duis lobortis tortor a neque lobortis tristique eu non sem.", complete: false},
      {task_id: 4, task_name: "Praesent", task_text: "Praesent ullamcorper ex non placerat euismod. Sed efficitur accumsan felis, vitae dignissim nulla rhoncus vel.", complete: true},
      {task_id: 5, task_name: "Cras", task_text: "Cras erat turpis, malesuada vitae mi vel, facilisis suscipit elit.", complete: false},
      {task_id: 6, task_name: "Mauris", task_text: "Mauris efficitur, lectus dapibus sollicitudin egestas, eros tellus interdum massa, et vulputate dui nisl sit amet odio.", complete: false},
      {task_id: 7, task_name: "Aliquam", task_text: "Aliquam semper sed ex id pretium. Nam ultrices non augue at pharetra.", complete: false},
      {task_id: 8, task_name: "Praesent", task_text: "Praesent efficitur neque sit amet libero vehicula, sed convallis justo tincidunt. Nullam a tincidunt purus.", complete: false}
    ];
  }

  ngOnInit() {
  }

  public SetTaskComplete(t:Task):void {
    //this.api.postUpdate(t);
    t.complete = true;
    console.log("true");
  }

  public SetTaskIncomplete(t:Task):void {
    //this.api.postUpdate(t);
    t.complete = false;
    console.log("false");
  }

}
