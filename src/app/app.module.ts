import { DynamicFormDetailComponent } from './filters/app.dynamic.form.detail.component';
import { DynamicFormComponent } from './filters/app.dynamic.form.component';
import { FormRoutingModule } from './forms/form.rounting';
import { FormService } from './forms/form.service';
import { HttpModule } from '@angular/http';
import { PostService } from './posts/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { FormComponent } from './forms/form.component';
import { FormListComponent } from './forms/form-list/form-list.component';
import { FormEditComponent } from './forms/form-edit/form-edit.component';
import { FormViewComponent } from './forms/form-view/form-view.component';


const appRoutes: Routes = [
  { path: 'posts', component: PostsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    FormComponent,
    FormListComponent,
    FormEditComponent,
    FormViewComponent,
    DynamicFormComponent,
    DynamicFormDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
