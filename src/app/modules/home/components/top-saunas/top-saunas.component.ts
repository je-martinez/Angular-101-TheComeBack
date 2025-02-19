import { Component } from '@angular/core';
import { SaunaCardComponent } from '../sauna-card/sauna-card.component';

@Component({
  selector: 'top-saunas',
  imports: [SaunaCardComponent],
  templateUrl: './top-saunas.component.html',
})
export class TopSaunasComponent {}
