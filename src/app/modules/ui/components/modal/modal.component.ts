import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
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

  @Input() isOpen = true;
  @Input() contentTemplate: TemplateRef<any> | undefined;
  @Output() onCloseModalEvent = new EventEmitter<boolean>();

  ngOnInit() {
    if (this.isOpen) {
      this.scrollLockService.lockScroll();
    }
  }

  ngOnDestroy() {
    if (this.isOpen) {
      this.scrollLockService.unlockScroll();
    }
  }

  public close() {
    this.onCloseModalEvent.emit(!this.isOpen);
  }
}
