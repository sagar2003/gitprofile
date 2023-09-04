import { AfterViewInit, Component, Input } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-orgs',
  templateUrl: './orgs.component.html',
  styleUrls: ['./orgs.component.css']
})

export class OrgsComponent  implements AfterViewInit{

  @Input() userId:any;
  userOrgs:any;
  
  constructor(private orgsService:UsersService){

  }

  ngAfterViewInit(){
    this.orgsService.getOrgs(this.userId).subscribe((data)=>{
      this.userOrgs=data;
      console.log(this.userOrgs.length)
    })
  }

}
