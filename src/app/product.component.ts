import { Component, Input } from '@angular/core';

@Component({
  selector: 'product',
  template: `
    <div class="media">
      <div class="media-left">
        <img class="mr-3" src="{{ data.imageUrl }}" alt="Generic placeholder image">
      </div>
      <div class="media-body">
        <h5 class="mt-0">{{ data.productName }}</h5>
        {{ data.releasedDate | date:"MM/dd/yy" }}
        <rating [ratingValue] = "data.rating" [numOfReviews] = "data.numOfReviews"></rating>
        <div [ngSwitch]="data.rating">
          <div *ngSwitchCase="1">Poor</div>
          <div *ngSwitchCase="2">Fair</div>
          <div *ngSwitchCase="3">Good</div>
          <div *ngSwitchCase="4">Very Good</div>
          <div *ngSwitchCase="5">Excellent</div>
          <div *ngSwitchDefault>Not Rated</div>
        </div>
        <br/>
        {{ data.description | truncate: 20 }}
        <br/>
      </div>
    </div>
  `,
  styleUrls: ['./product.component.styl']
})
export class ProductComponent{
  @Input() data;
}