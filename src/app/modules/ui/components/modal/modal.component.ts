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

@Component({
  selector: 'modal',
  imports: [NgTemplateOutlet],
  providers: [ScrollService],
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit, OnDestroy {
  constructor(private readonly scrollLockService: ScrollService) {}

  @Input() isOpen = true;
  @Output() isOpenChange = new EventEmitter<boolean>();
  @Input() contentTemplate: TemplateRef<any> | undefined;

  toggleModal() {
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
  }

  ngOnInit() {
    this.scrollLockService.lockScroll();
  }

  ngOnDestroy() {
    this.scrollLockService.unlockScroll();
  }
}
