import { Component} from '@angular/core';
import { GitHubService } from './github.service';
import { FormControl } from '@angular/forms';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators'

@Component({
  selector: 'github',
  templateUrl: './github.component.html',
})
export class GithubComponent {
  isLoading = false;
  users:any = [];
  searchControl = new FormControl();

  constructor(private _gitHubService: GitHubService) {
  }

  ngOnInit(){
    this.searchControl.valueChanges
      .pipe(filter(text => text.length >=3), debounceTime(400), distinctUntilChanged())
      .subscribe(value =>{
        this.isLoading = true;
        
        this._gitHubService.getGitHubData(value)
        .subscribe(data => {
          this.isLoading = false;
          this.users = data.items;
        });
      });
  }

}
