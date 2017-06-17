import { DropdownForm } from './app.form.dropdown';
import { TextboxForm } from './app.form.textbox';
import { FormService } from './../forms/form.service';
import { Component, Input, OnInit, EventEmitter, Output, AfterContentInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlService } from './app.form.control.service';
import { FormBase } from './app.form.base';

@Component({
  selector: 'dynamic-form',
  templateUrl: 'app.dynamic.form.component.html',
  providers: [FormControlService]
})
export class DynamicFormComponent implements AfterContentInit {

  @Input() questions: FormBase<any>[] = [];
  form: FormGroup;

  @Output() notify = new EventEmitter<string>();

  constructor(private qcs: FormControlService, private service: FormService) {
  }

  ngAfterContentInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.notify.emit(JSON.stringify(this.form.value));
  }

  clean() {
    this.notify.emit(null);
  }


}
