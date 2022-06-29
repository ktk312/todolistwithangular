import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { User } from '../../interface/user';
@Component({
  selector: 'app-httpexample',
  templateUrl: './httpexample.component.html',
  styleUrls: ['./httpexample.component.css']
})
export class HttpexampleComponent implements OnInit {

  constructor(private apiService: ApiserviceService) { }

  users: User[] = [];




  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.apiService.getUsers().subscribe({
      next: (res: User[]) => this.users = res,
      error: (err) => console.log(err),
      complete: () => console.log(`This subscription is complete`),
    });

  }

}
