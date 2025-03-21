import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';


@NgModule({
  declarations: [
    FormComponent,
    SubmitFormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule
  ],
  exports: [
    FormsModule
  ]
 
})
export class FormModule { }
