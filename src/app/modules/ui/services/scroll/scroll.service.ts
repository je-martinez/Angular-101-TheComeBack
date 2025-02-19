import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private scrollPosition = 0;

  lockScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollPosition = window.scrollY;
      document.body.classList.add('overflow-hidden', 'fixed', 'w-full');
      document.body.style.top = `-${this.scrollPosition}px`;
    }
  }

  unlockScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('overflow-hidden', 'fixed', 'w-full');
      document.body.style.removeProperty('top');
      window.scrollTo(0, this.scrollPosition);
    }
  }
}
