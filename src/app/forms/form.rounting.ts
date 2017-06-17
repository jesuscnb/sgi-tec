import { FormViewComponent } from './form-view/form-view.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { FormListComponent } from './form-list/form-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: 'form', component: FormListComponent },
  { path: 'form/novo', component: FormEditComponent },
  {
    path: 'form/:id', component: FormViewComponent},
  { path: 'form/:id/edit', component: FormEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule { }
