import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { 
  }

  ackSearchList:EventEmitter<string> = new EventEmitter();

  getUsers(val:string){
    return this.http.get(("https://api.github.com/search/users?q="+val));
  }

  searchRepos(query:string){
    return this.http.get('https://api.github.com/search/repositories?q='+query)
  }

  searchOrgs(query:string){

  }

  getSingleUser(val:string){
    return this.http.get(("http://api.github.com/users/"+val).toString());
  }

  getRepos(user:string){
    return this.http.get(("https://api.github.com/users/"+user+"/repos"));
  }

  getOrgs(user:string){
    return this.http.get("https://api.github.com/users/"+user+"/orgs");
  }

}
