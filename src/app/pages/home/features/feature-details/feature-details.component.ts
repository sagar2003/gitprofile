import { Component } from '@angular/core';
import { FeaturesService } from '../features.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature-details',
  templateUrl: './feature-details.component.html',
  styleUrls: ['./feature-details.component.css']
})
export class FeatureDetailsComponent {

  heading:string="User Details"
  ctab:number=1;
  p1:string=this.featureDetails.data.userdetail.p1;
  p2:string=this.featureDetails.data.userdetail.p2;

  constructor(private featureDetails:FeaturesService,private router:Router){
    featureDetails.emit.subscribe((val)=>{
      switch(val){
        case 1:
          this.heading="User Details";
          this.ctab=1;
          this.p1=this.featureDetails.data.userdetail.p1;
          this.p2=this.featureDetails.data.userdetail.p2;
          break;
        case 2:
          this.heading="Repositories";
          this.ctab=2;
          this.p1=this.featureDetails.data.repositories.p1;
          this.p2=this.featureDetails.data.repositories.p2;
          break;
        case 3:
          this.heading="Activities";
          this.ctab=3;
          this.p1=this.featureDetails.data.activities.p1;
          this.p2=this.featureDetails.data.activities.p2;
          break;
      }
    })
  }

  

}
