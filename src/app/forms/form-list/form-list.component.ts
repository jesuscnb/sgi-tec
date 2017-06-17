import { Subscriber } from 'rxjs/Subscriber';
import { FormService } from './../form.service';
import { Form } from './../Form';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {

  private forms$: Observable<Form[]>;

  constructor(private service: FormService) { }

  ngOnInit() {
    this.forms$ = this.service.getAllPosts();
  }

  remove(_id) {
    this.service.delete(_id).subscribe(
      data => {
        console.log(data);
      });
  }



}
