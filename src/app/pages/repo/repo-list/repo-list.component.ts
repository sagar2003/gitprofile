import { AfterViewInit, Component, Input } from '@angular/core';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements AfterViewInit{

  @Input() userId:any;
  userRepos:any;
  userOrgs:any;

  constructor(private reposService:UsersService){
    
  }

  ngAfterViewInit(): void {
    this.reposService.getRepos(this.userId).subscribe((data)=>{
      this.userRepos=data;
      console.log(data)
    })
  }


}
