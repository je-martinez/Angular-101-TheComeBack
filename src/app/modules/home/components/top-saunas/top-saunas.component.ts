import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ModalComponent } from '@/modules/ui/components';
import { SaunaCardComponent } from '../sauna-card/sauna-card.component';
import { DatabaseService } from '@/data';
import { Sauna } from '@/types';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'top-saunas',
  imports: [SaunaCardComponent, ModalComponent],
  templateUrl: './top-saunas.component.html',
})
export class TopSaunasComponent implements OnInit, OnDestroy {
  public readonly isModalOpen = signal(false);
  public readonly activeSauna = signal<string | null>(null);
  private readonly databaseService = inject(DatabaseService);
  public readonly saunas = signal<Sauna[]>([]);
  private readonly $unsubscribe = new Subject<void>();

  ngOnInit(): void {
    this.databaseService
      .getSaunas()
      .pipe(takeUntil(this.$unsubscribe))
      .subscribe((saunas) => {
        this.saunas.set(saunas);
      });
  }

  ngOnDestroy(): void {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }

  public openModal() {
    this.isModalOpen.set(true);
  }

  public closeModal() {
    this.activeSauna.set(null);
    this.isModalOpen.set(false);
  }

  public onSaunaHover(sauna: Sauna) {
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
