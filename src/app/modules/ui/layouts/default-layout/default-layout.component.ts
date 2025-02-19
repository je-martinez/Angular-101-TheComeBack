import { Component } from '@angular/core';

import {
  HeaderComponent,
  ContentComponent,
  FooterComponent,
} from './components';

@Component({
  selector: 'default-layout',
  imports: [HeaderComponent, ContentComponent, FooterComponent],
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {}
