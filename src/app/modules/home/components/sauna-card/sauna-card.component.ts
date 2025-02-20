import { RatingComponent } from '@/modules/ui/components';
import { Sauna } from '@/types';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'sauna-card',
  imports: [RatingComponent],
  templateUrl: './sauna-card.component.html',
})
export class SaunaCardComponent {
  sauna = input<Sauna>();
  saunaClick = output<Sauna>();

  public onSaunaClick() {
    const sauna = this.sauna();
    sauna ? this.saunaClick.emit(sauna) : null;
  }
}
