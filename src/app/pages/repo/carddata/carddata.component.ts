import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carddata',
  templateUrl: './carddata.component.html',
  styleUrls: ['./carddata.component.css']
})
export class CarddataComponent {
  @Input() timingdata:any;
  @Input() licencedata:any;
}
