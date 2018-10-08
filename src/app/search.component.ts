import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  searchControl = new FormControl();

  constructor() { 
    this.searchControl.valueChanges
      .pipe(
        filter(text => text.length >= 3),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(
        value => {
          console.log(value);
        }
      );
  }

}
