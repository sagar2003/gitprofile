import { Component, ComponentRef, Input } from '@angular/core';
import { OrgsComponent } from 'src/app/pages/orgs/orgs.component';
import { RepoListComponent } from 'src/app/pages/repo/repo-list/repo-list.component';

@Component({
  selector: 'app-nav-user-detail',
  templateUrl: './nav-user-detail.component.html',
  styleUrls: ['./nav-user-detail.component.css']
})
export class NavUserDetailComponent {

  tab:number=1;
  @Input() userId:any;

  
  tabChange(t:number){
    this.tab=t;
  }

  setUserIdToChild(component:RepoListComponent|OrgsComponent){
    component.userId=this.userId;
  }

}
