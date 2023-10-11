import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
})
export class RepoComponent implements OnInit {
  repodata: any;
  timingdata:any;
  licencedata:any;
  languages:{key:string,val:number}[]=[];
  branches:any;

  constructor(route: ActivatedRoute,private userService:UsersService) {
    route.data.subscribe({
      next: ({ repo }) => {
        this.repodata = repo;
        this.timingdata={'creation':repo.created_at,'pushed':repo.pushed_at,'updated':repo.updated_at}
        this.licencedata={'licence':repo.license?.name,'visibility':repo.visibility,'template':repo.is_template}
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.userService.getSingleRepoLanguages(this.repodata.languages_url).subscribe({
      next:(data)=>{
        const languagekey = Object.keys(data);
        let sum=0;
        for(let k of languagekey){
          sum+=data[k];
        }
        for(let k of languagekey){
          this.languages.push({key:k,val:Number.parseFloat((data[k]/sum*100).toFixed(2))})
        }
      },error:(err)=>{
        console.log(err);
      }
    });
    this.userService.getSingleRepoBranches(this.repodata.branches_url.toString().split('{')[0]).subscribe({
      next:(data)=>{
        this.branches=data;        
      },error:(err)=>{
        console.log(err)
      }
    })
  }
  


}
