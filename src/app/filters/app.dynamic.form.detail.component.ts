import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormBase} from './app.form.base';

@Component({
  selector: 'df-question',
  templateUrl: './app.dynamic.form.detail.component.html'
})
export class DynamicFormDetailComponent {
  @Input() question: FormBase<any>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
