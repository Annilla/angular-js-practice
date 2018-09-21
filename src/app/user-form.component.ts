import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'user-form',
  templateUrl: 'user-form.component.html'
})
export class UserFormComponent{
  model = new User('', '', '');

  countries = ['United States', 'Singapore', 'Hong Kong', 'Australia'];

  onSubmit() {

  }
}