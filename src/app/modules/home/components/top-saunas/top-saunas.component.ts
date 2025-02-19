import { Component } from '@angular/core';
import { SaunaCardComponent } from '../sauna-card/sauna-card.component';
import { ModalComponent } from '@/modules/ui/components';

@Component({
  selector: 'top-saunas',
  imports: [SaunaCardComponent, ModalComponent],
  templateUrl: './top-saunas.component.html',
})
export class TopSaunasComponent {}
