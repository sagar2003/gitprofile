import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pbar',
  templateUrl: './pbar.component.html',
  styleUrls: ['./pbar.component.css']
})
export class PbarComponent implements OnChanges {

  @Input() langs:{key:string,val:number}[]=[];
  colors=['red','blue','green','white','purple','pink','yellow','navy','teal','aqua','chocolate']
  colorCode:number[]=[]
  
  ngOnChanges(changes: SimpleChanges): void {
    for(let i in changes['langs']){
      this.colorCode.push(Number.parseInt((Math.random()*12).toString()))
    }
  }

  geColorCode(i:number){
    return this.colors.at(i);
  }
}
