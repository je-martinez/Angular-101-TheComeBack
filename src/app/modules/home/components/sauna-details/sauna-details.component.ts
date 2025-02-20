import { animate, style, transition, trigger } from '@angular/animations';
import { NgIf } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroCheckCircle } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'sauna-details',
  imports: [NgIf, NgIcon],
  providers: [provideIcons({ heroCheckCircle })],
  templateUrl: './sauna-details.component.html',
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(5000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class SaunaDetailsComponent {
  isVisible = input.required<boolean>();
}
