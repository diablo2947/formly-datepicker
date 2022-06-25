import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  form = new FormGroup({});
  model: any = {
    date: Date
  };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'date',
      type: 'datepicker',
      props: {
        label: 'Datepicker',
        placeholder: 'Placeholder',
        description: 'Description',
        dateFormat: 'yy/mm/dd',
        hourFormat: '24',
        numberOfMonths: 1,
        selectionMode: 'single',
        required: true,
        readonlyInput: false,
        showTime: false,
        showButtonBar: true,
        showIcon: false,
        showOtherMonths: true,
        selectOtherMonths: false,
        monthNavigator: false,
        yearNavigator: false,
        yearRange: '2020:2030',
        inline: false,
      },
    },
  ];

  ngOnInit() {
    this.model = {
      date: new Date("2001-05-06"),
    }
    console.log(this.model);
  }

  modelChange() {
    console.log(this.model);
  }
}


/**  Copyright 2021 Formly. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://github.com/ngx-formly/ngx-formly/blob/main/LICENSE */