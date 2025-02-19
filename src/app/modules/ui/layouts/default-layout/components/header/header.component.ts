import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'default-layout-header',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required],
    });
  }

  onBrowseSaunas() {
    console.log('Browse saunas');
  }
}
