import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../api.service';
import { ListComponent } from '../list/list.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ListComponent]
})
export class MenuComponent implements OnInit {
  animal: string;
  name: string = "";
  text: string = "";

  constructor(public api:ApiService, public list:ListComponent, public dialog: MatDialog) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(OverviewDialog, {
      width: '250px',
      data: { text: this.text }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.text = result;
      console.log(this.text);
      if(this.text != "" && this.text != undefined){
        this.CreateTask(this.text);
      }
      this.text = "";
    });
  }


  ngOnInit() {
    /* this.CreateTask("Empty trash");
    this.CreateTask("Clean dishes");
    this.CreateTask("Vacuume"); */
  }
  
  public CreateTask(str: string){
    this.api.PostNew(str)
    .subscribe( data => console.log(data),
                error => console.log(error)
              );
  }

  public ChangeView(str: string){
    this.list.SetView(str);
    console.log(str);
  }
}

@Component({
  selector: 'overview-dialog',
  templateUrl: './overview-dialog.html'
})
export class OverviewDialog {
  
  constructor(
    public dialogRef: MatDialogRef<OverviewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      
     }

  onNoClick(): void {
    this.dialogRef.close();
  }
}