import { FormService } from './../form.service';
import { Form } from './../Form';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  form: Form = new Form;

  constructor(private service: FormService) { }

  ngOnInit() {
  }

  save() {
    this.service.save(this.form)
      .subscribe(
      data => {
        console.log(data);
      }
      );
  }

}
