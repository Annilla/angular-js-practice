import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

// Component
import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { RatingComponent } from './rating.component';
import { ProductComponent } from './product.component';
import { UserFormComponent } from './user-form.component';
import { LoginComponent } from './login.component';
// Service
// import { ProductService } from './products.service';
// Pipe
import { TruncatePipe } from './truncate.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    RatingComponent,
    ProductComponent,
    UserFormComponent,
    LoginComponent,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
