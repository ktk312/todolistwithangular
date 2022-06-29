import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
  taskList: Array<any> = [];
  completedList: Array<any> = [];
  ngOnInit(): void {
  }

  taskDone(i: number,) {
    this.completedList.push(this.taskList[i]);

    this.taskList.splice(i, 1);
  }

  deleteTask(i: number) {
    this.completedList.splice(i, 1);
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '100%',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res != '') {
        this.taskList.push(res);
        console.log(this.taskList);
      }
    });

  }

}
