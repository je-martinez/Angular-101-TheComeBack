import { Component, signal } from '@angular/core';
import { SaunaCardComponent } from '../sauna-card/sauna-card.component';
import { ModalComponent } from '@/modules/ui/components';
import { Sauna } from '@/types';
import { SaunaDetailsComponent } from '../sauna-details/sauna-details.component';

const mockData: any[] = [
  {
    id: 1,
    name: 'Sauna 1',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    name: 'Sauna 2',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    name: 'Sauna 3',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 4,
    name: 'Sauna 4',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 5,
    name: 'Sauna 5',
    image: 'https://picsum.photos/200/300',
  },
];

@Component({
  selector: 'top-saunas',
  imports: [SaunaCardComponent, ModalComponent, SaunaDetailsComponent],
  templateUrl: './top-saunas.component.html',
})
export class TopSaunasComponent {
  public readonly isModalOpen = signal(false);
  public readonly activeSauna = signal<number | null>(null);

  public openModal() {
    this.isModalOpen.set(true);
  }

  public closeModal() {
    this.activeSauna.set(null);
    this.isModalOpen.set(false);
  }

  public get saunas() {
    return mockData;
  }

  public onSaunaHover(sauna: any) {
    this.activeSauna.set(sauna.id);
  }

  public onSaunaLeave() {
    this.activeSauna.set(null);
  }

  public onSaunaClick(sauna: any) {
    this.activeSauna.set(sauna);
    this.openModal();
  }
}
