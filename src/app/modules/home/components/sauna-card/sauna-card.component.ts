import { RatingComponent } from '@/modules/ui/components';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sauna-card',
  imports: [RatingComponent],
  templateUrl: './sauna-card.component.html',
})
export class SaunaCardComponent {
  @Input() sauna: any;
  @Output() saunaClick = new EventEmitter<any>();

  public onSaunaClick() {
    this.saunaClick.emit(this.sauna);
  }
}
