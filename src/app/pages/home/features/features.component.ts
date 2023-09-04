import { Component, ElementRef, ViewChild } from '@angular/core';
import { FeaturesService } from './features.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  
  constructor(private fetureDetail:FeaturesService){
    
  }
  tabindex=1;

  tabChange(index:number){
    this.tabindex=index;
    this.fetureDetail.emit.emit(index);
  }
}
