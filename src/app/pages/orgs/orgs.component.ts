import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orgs',
  templateUrl: './orgs.component.html',
  styleUrls: ['./orgs.component.css'],
})
export class OrgsComponent implements OnInit ,OnDestroy{
  @Input() userId: any;
  userOrgs: any;
  orgSubs:Subscription|undefined;

  constructor(
    private userService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {
    this.orgSubs = userService.ackSearchList.subscribe((val) => {
      userService.getOrgs(val).subscribe({
        next: (data) => {
          this.userOrgs = data;
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }
  ngOnDestroy(): void {
    this.orgSubs?.unsubscribe();
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe({
      next: ({ orgs }) => {
        this.userOrgs = orgs;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  
}
