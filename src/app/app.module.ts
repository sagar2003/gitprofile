import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './pages/home/welcome/welcome.component';
import { LayoutFeatureComponent } from './layout-feature/layout-feature.component';
import { FooterComponent } from './footer/footer.component';
import { FeatureExplainComponent } from './pages/home/feature-explain/feature-explain.component';
import { FeaturesComponent } from './pages/home/features/features.component';
import { FeatureDetailsComponent } from './pages/home/features/feature-details/feature-details.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { RepoComponent } from './pages/repo/repo.component';
import { ActComponent } from './pages/act/act.component';
import { AnimateDirective } from './animate.directive';
import { HttpClientModule } from "@angular/common/http";
import { TempHolderComponent } from './pages/users/temp-holder/temp-holder.component';
import { UserExplainComponent } from './pages/home/feature-explain/user-explain/user-explain.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserComponent } from './pages/users/user/user.component';
import { NavUserDetailComponent } from './pages/users/user/nav-user-detail/nav-user-detail.component';
import { RepoListComponent } from './pages/repo/repo-list/repo-list.component';
import { OrgsComponent } from './pages/orgs/orgs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    FeaturesComponent,
    FeatureDetailsComponent,
    FeatureExplainComponent,
    LayoutFeatureComponent,
    FooterComponent,
    HomeComponent,
    UsersComponent,
    RepoComponent,
    ActComponent,
    AnimateDirective,
    TempHolderComponent,
    UserExplainComponent,
    UserListComponent,
    UserComponent,
    NavUserDetailComponent,
    RepoListComponent,
    OrgsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
