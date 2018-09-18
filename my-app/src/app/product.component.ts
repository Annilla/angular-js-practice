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
        {{ data.releasedDate }}
        <rating [ratingValue] = "data.rating" [numOfReviews] = "data.numOfReviews"></rating>
        <br/>
        {{ data.description }}
        <br/>
      </div>
    </div>
  `,
  styleUrls: ['./product.component.styl']
})
export class ProductComponent{
  @Input() data;
}