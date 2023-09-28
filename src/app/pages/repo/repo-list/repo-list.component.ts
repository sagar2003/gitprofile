import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../../users/users.service';
import {
  ActivatedRoute,
  RouterState,
  RouterStateSnapshot,
} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css'],
})
export class RepoListComponent implements OnInit,OnDestroy {
  @Input() userId: any;
  userRepos: any;
  getReposSubs:Subscription | undefined;

  constructor(
    private userService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {
    userService.ackSearchList.subscribe((query) => {
      this.getReposSubs = userService.getRepos(query).subscribe({
        next: (data) => {
          this.userRepos = data;
          console.log(data)
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: ({ repos }) => {
        this.userRepos = repos;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnDestroy(): void {
      this.getReposSubs?.unsubscribe();
  }
}
