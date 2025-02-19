import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroStar } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'rating',
  imports: [NgIcon],
  providers: [
    provideIcons({
      heroStar,
    }),
  ],
  templateUrl: './rating.component.html',
})
export class RatingComponent {
  icon = 'heroStar';

  @Input() rating = 4.5;

  getStars() {
    return Array(Math.floor(this.rating))
      .fill(0)
      .map((_, index) => index + 1);
  }

  getHalfStars() {
    return Array(Math.ceil(this.rating) - Math.floor(this.rating))
      .fill(0)
      .map((_, index) => index + 1);
  }
}
