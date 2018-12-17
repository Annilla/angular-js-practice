import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'githubuser',
  template: `
    <h1>User Login: {{ login }}</h1>
    <h2>User Score: {{ score }}</h2>
  `
})

export class GithubUserComponent {
  login;
  score;

  constructor(private _route:ActivatedRoute) {

  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.login = params["login"];
      this.score = params["score"];
    });
  }
}