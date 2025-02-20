import { RatingComponent } from '@/modules/ui/components';
import { Sauna } from '@/types';
import { Component, input, output } from '@angular/core';
import { SaunaDetailsComponent } from '../sauna-details/sauna-details.component';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'sauna-card',
  imports: [RatingComponent, SaunaDetailsComponent],
  templateUrl: './sauna-card.component.html',
  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({ height: '0px', opacity: 0, overflow: 'hidden' })
      ),
      state('expanded', style({ height: '*', opacity: 1 })),
      transition('collapsed <=> expanded', [animate('500ms ease-in-out')]),
      transition('expanded <=> collapsed', [animate('500ms ease-in-out')]),
    ]),
  ],
})
export class SaunaCardComponent {
  sauna = input<Sauna>();
  saunaClick = output<Sauna>();
  isActive = input.required<boolean>();

  public onSaunaClick() {
    const sauna = this.sauna();
    sauna ? this.saunaClick.emit(sauna) : null;
  }
}
