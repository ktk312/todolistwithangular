import { Component } from '@angular/core';

import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'todolistwithangular';

  currentUrl:string = '';

  constructor( private router: Router){
    router.events.subscribe(event => {
      this.currentUrl = router.url;
    });


    

  }


  




}
