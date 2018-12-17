import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li><a routerLink="">Home</a></li>
      <li><a routerLink="github">Github</a></li>
    </ul>
    <router-outlet></router-outlet>
    <hr>
    <search></search>
    <hr>
    <login></login>
    <hr>
    <user-form></user-form>
    <hr>
    <h1>{{ title }}</h1>
    <button class = "btn btn-primary" [class.disabled] = "!isValid" (click) = "onClickMe($event)">Submit</button>
    <br />
    <img src = "{{ imageUrl }}" />
    <hr>
    <products></products>
    `
})
export class AppComponent {
  title: string = 'Anny Angular Practice';
  isValid = true;
  imageUrl = "https://images.unsplash.com/photo-1507290439931-a861b5a38200?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4e49f0b66341702171b119d4578a05ff&auto=format&fit=crop&w=600&q=80";
  onClickMe($event){
    console.log('Clicked', $event);
  }
}
