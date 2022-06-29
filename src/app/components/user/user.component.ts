import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../../services/apiservice.service';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService: ApiserviceService) {

  }
  currentRoute: any;
  user: User | undefined;

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.currentRoute = params['id'],
        this.getUser();
    });
  }

  getUser() {
    this.apiService.getUser(this.currentRoute).subscribe(
      {
        next: (res: User) => this.user = res,
        error: (error) => console.log(error),
        complete: () => console.log('completed')
      }
    );

  }



}
