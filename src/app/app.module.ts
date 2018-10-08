import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// FormsModule: Form Validation - Forms
// ReactiveFormsModule: Form Validation - Reactive Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// HttpClientModule: Search GitHub User - RxJS Observable
import { HttpClientModule } from '@angular/common/http';


// Component
import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { RatingComponent } from './rating.component';
import { ProductComponent } from './product.component';
import { UserFormComponent } from './user-form.component';
import { LoginComponent } from './login.component';
import { SearchComponent } from './search.component';
import { GithubComponent } from './github.component';
// Service
import { ProductService } from './product.service';
import { LoginService } from './login.service';
import { GitHubService } from './github.service';
// Pipe
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    RatingComponent,
    ProductComponent,
    UserFormComponent,
    LoginComponent,
    SearchComponent,
    GithubComponent,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    LoginService,
    GitHubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
