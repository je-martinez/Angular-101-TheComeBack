import { Component, signal } from '@angular/core';
import { SaunaCardComponent } from '../sauna-card/sauna-card.component';
import { ModalComponent } from '@/modules/ui/components';

@Component({
  selector: 'top-saunas',
  imports: [SaunaCardComponent, ModalComponent],
  templateUrl: './top-saunas.component.html',
})
export class TopSaunasComponent {
  public readonly isModalOpen = signal(false);

  public openModal() {
    this.isModalOpen.set(true);
  }

  public closeModal() {
    this.isModalOpen.set(false);
  }

  public onSaunaClick(sauna: any) {
    this.openModal();
  }
}
