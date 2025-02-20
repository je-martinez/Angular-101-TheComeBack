import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  input,
  OnDestroy,
  OnInit,
  output,
  TemplateRef,
} from '@angular/core';
import { ScrollService } from '../../services';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroXMarkSolid } from '@ng-icons/heroicons/solid';
@Component({
  selector: 'modal',
  imports: [NgTemplateOutlet, NgIcon],
  providers: [ScrollService, provideIcons({ heroXMarkSolid })],
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit, OnDestroy {
  constructor(private readonly scrollLockService: ScrollService) {}

  isOpen = input<boolean>(true);
  contentTemplate = input<TemplateRef<any>>();
  onCloseModalEvent = output<boolean>();

  ngOnInit() {
    if (this.isOpen()) {
      this.scrollLockService.lockScroll();
    }
  }

  ngOnDestroy() {
    if (this.isOpen()) {
      this.scrollLockService.unlockScroll();
    }
  }

  public close() {
    this.onCloseModalEvent.emit(!this.isOpen);
  }
}
