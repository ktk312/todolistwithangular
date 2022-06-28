import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogComponent} from './components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'todolistwithangular';

  taskList: Array<any>=[];
  completedList: Array<any> =[];

  constructor(private dialog:MatDialog){}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  let dialogRef=  this.dialog.open(DialogComponent, {
      width: '100%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    
    dialogRef.afterClosed().subscribe(res=>{
      if(res!=''){
      this.taskList.push(res);
      console.log(this.taskList);
      }
    });
    
  }

  taskDone(i:number,  ){
    this.completedList.push(this.taskList[i]);
    
    this.taskList.splice(i,1);
  }

  deleteTask(i:number){
    this.completedList.splice(i,1);
  }
}
