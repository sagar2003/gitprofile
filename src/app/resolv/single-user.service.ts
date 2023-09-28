import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { UsersService } from '../pages/users/users.service';

@Injectable({
  providedIn: 'root'
})
export class SingleUserService  {

  constructor() { }
}

export const SingleUserDataReolver:ResolveFn<any> = (route:ActivatedRouteSnapshot,state:RouterStateSnapshot) => {
  return inject(UsersService).getSingleUser(route.params['id']!)
}

export const SingleUserRepoResolver:ResolveFn<any> = (route:ActivatedRouteSnapshot,state:RouterStateSnapshot) =>{
  return inject(UsersService).getRepos(route.parent?.params['id'])
}

export const SingleUserOrgsResolver:ResolveFn<any> = (route:ActivatedRouteSnapshot,state:RouterStateSnapshot) => {
  return inject(UsersService).getOrgs(route.parent?.params['id']);
}