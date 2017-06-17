import { DropdownForm } from './../../filters/app.form.dropdown';
import { TextboxForm } from './../../filters/app.form.textbox';
import { FormBase } from './../../filters/app.form.base';
import { FormService } from './../form.service';
import { Form } from './../Form';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent implements OnInit {

  inscricao: Subscription;
  questions: any[];
  clienteJSON: String = '';

  constructor(private service: FormService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.loadingForm();
  }

  onNotify(evt) {
    console.log(evt);
    this.clienteJSON = evt;
  }

  loadingForm() {

    const inputs: FormBase<any>[] = [];

    this.service.getAllPosts().subscribe(
      data => {
        for (const form of data) {
          let elemento: FormBase<any>;

          switch (form.name) {
            case 'textbox':
              elemento = new TextboxForm({
                key: form.key,
                label: form.label,
                required: form.required,
                type: form.type,
                placeholder: form.placeholder,
                order: form.order
              });
              inputs.push(elemento);
              break;
            case 'dropdown':
              elemento = new DropdownForm({
                key: form.key,
                label: form.label,
                required: form.required,
                options: [
                  { key: 'TODOS', value: 'TODOS' },
                  { key: form.placeholder, value: form.placeholder }
                ],
                order: form.order
              });
              inputs.push(elemento);
              break;
          }
        }
        inputs.sort((a, b) => a.order - b.order);
        this.questions = inputs;
      }
    );

  }

  public getQuestions() {
    const questions: FormBase<any>[] = [
      new DropdownForm({
        key: 'situacaoPedido',
        options: [
          { key: 'TODOS', value: 'TODOS' },
          { key: 'ABERTO', value: 'ABERTO' },
          { key: 'CANCELADO', value: 'CANCELADO' },
          { key: 'FECHADO', value: 'FECHADO' }
        ],
        order: 3
      }),
      new TextboxForm({
        key: 'cliente.nome',
        required: false,
        placeholder: 'Nome do Cliente',
        order: 1
      }),
      // new TextboxForm({
      //   key: 'dataPedido',
      //   type: 'date',
      //   placeholder:'Data Pedido',
      //   order: 2
      // })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }



}
