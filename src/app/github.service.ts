import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface GitHubUser {
  items: Object;
}

@Injectable()
export class GitHubService {
  constructor(private _http: HttpClient) {}

  getGitHubData (_searchTerm: String) {
    return this._http.get<GitHubUser>("https://api.github.com/search/users?q=" + _searchTerm)
  }
}