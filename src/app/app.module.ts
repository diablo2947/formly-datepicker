import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyDatepickerModule } from '@ngx-formly/primeng/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './form/form.component';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { CalendarModule } from 'primeng/calendar';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([{ path: 'form', component: FormComponent }]),
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [{ name: 'required', message: 'This field is required' }],
    }),
    FormlyDatepickerModule,
    FormlyPrimeNGModule,
    CalendarModule
  ],
  declarations: [AppComponent, FormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }