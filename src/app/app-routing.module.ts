import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { ActComponent } from './pages/act/act.component';
import { RepoComponent } from './pages/repo/repo.component';
import { UserComponent } from './pages/users/user/user.component';
import {
  SingleUserDataReolver,
  SingleUserOrgsResolver,
  SingleUserRepoResolver,
  SingleUserSingleRepoResolver,
} from './resolv/single-user.service';
import { RepoListComponent } from './pages/repo/repo-list/repo-list.component';
import { OrgsComponent } from './pages/orgs/orgs.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  {
    path: 'user/:id',
    component: UserComponent,
    resolve: { user: SingleUserDataReolver },
    children: [
      {
        path: 'repos',
        resolve: { repos: SingleUserRepoResolver },
        component: RepoListComponent,
      },
      {
        path: 'orgs',
        resolve: { orgs: SingleUserOrgsResolver },
        component: OrgsComponent,
      },
    ],
  },
  {
    path: 'repo/:owner/:reponame',
    component: RepoComponent,
    resolve: { repo: SingleUserSingleRepoResolver },
  },
  { path: 'activity', component: ActComponent },
  { path: 'repos', component: RepoComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
