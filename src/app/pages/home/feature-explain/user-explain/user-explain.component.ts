import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-explain',
  templateUrl: './user-explain.component.html',
  styleUrls: ['./user-explain.component.css']
})
export class UserExplainComponent {
  constructor(private route:Router){

  }
  navigateTo(){
    this.route.navigate(["/users"])
  }
}

