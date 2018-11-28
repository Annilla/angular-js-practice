import { Component} from '@angular/core';
import { GitHubService } from './github.service';

@Component({
  selector: 'github',
  templateUrl: './github.component.html',
})
export class GithubComponent {
  isLoading = true;

  constructor(private _gitHubService: GitHubService) {
  }

  ngOnInit(){
    this._gitHubService.getGitHubData('greg')
    .subscribe(data => {
      this.isLoading = false;
      console.log(data.items);
    });
  }

}
