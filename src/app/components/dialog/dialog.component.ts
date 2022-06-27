import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private matDialogRef: MatDialogRef<DialogComponent>) { }

  todoForm !: FormGroup;

  ngOnInit(): void {

    this.todoForm = this.formBuilder.group({
      taskName: ['', Validators.required],
      taskDesc: ['', Validators.required],
      taskDate: ['', Validators.required],
      doneStatus:[false],
    });
  }

  saveTask(){
    
    
    this.matDialogRef.close(this.todoForm.value);
    this.todoForm.reset();
  }

}
