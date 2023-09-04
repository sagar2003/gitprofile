import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature-explain',
  templateUrl: './feature-explain.component.html',
  styleUrls: ['./feature-explain.component.css']
})
export class FeatureExplainComponent {
  constructor(private route:Router){

  }
  navigateTo(){
    this.route.navigate(["/users"])
  }
}
