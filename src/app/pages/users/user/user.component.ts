import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  userId:any;
  userData:any="";

  constructor(private activatedRouter:ActivatedRoute,private router:Router){
    
  }

  ngOnInit(): void {
    this.activatedRouter.data.subscribe({
      next:({user})=>{
        this.userData = user;
        this.userId=this.activatedRouter.snapshot.params['id'];
        this.router.navigate(['repos'],{relativeTo:this.activatedRouter})
      },error:(err)=>{

      }
    })
  }


}
