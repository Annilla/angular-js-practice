import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { GithubComponent } from './github.component';
import { GithubUserComponent} from './githubuser.component';

export const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'github', component: GithubComponent},
  { path: 'github/user/:login/:score', component: GithubUserComponent},
  { path: '**', component: NotFoundComponent }
]);