import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-select-testing',
  templateUrl: './select-testing.component.html',
  styleUrls: ['./select-testing.component.css']
})
export class SelectTestingComponent implements OnInit {
  countries = [
    { countryCode: '', countryName: 'Select Country' },
    { countryCode: 'US', countryName: 'United States' },
    { countryCode: 'CA', countryName: 'Canada' },
    { countryCode: 'MX', countryName: 'Mexico' }
  ];
  form: UntypedFormGroup = new UntypedFormGroup({});
  constructor(private formBuilder: UntypedFormBuilder) {
    this.form = this.formBuilder.group({
      countryCode: ''
    });
  }

  ngOnInit() {
  }

}
