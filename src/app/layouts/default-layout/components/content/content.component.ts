import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'default-layout-content',
  imports: [RouterOutlet],
  templateUrl: './content.component.html',
})
export class ContentComponent {}
