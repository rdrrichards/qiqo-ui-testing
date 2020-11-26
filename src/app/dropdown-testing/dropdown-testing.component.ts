import { Component, OnInit } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';

@Component({
  selector: 'app-dropdown-testing',
  templateUrl: './dropdown-testing.component.html',
  styleUrls: ['./dropdown-testing.component.css']
})
export class DropdownTestingComponent implements OnInit {
  sourceData = [
    {
        group: null,
        label: 'First group',
        value: 'First group',
        items: [
            {
                id: 1,
                name: null,
                label: 'Par unité',
                value: 'Par unité',
                description: null
            },
            {
                id: 2,
                name: null,
                label: 'Par employé',
                value: 'Par employé',
                description: null
            }
        ]
    },
    {
        group: null,
        label: 'Second group',
        value: 'Second group',
        items: [
            {
                id: 7,
                name: null,
                label: 'Temps entre démande et acceptation',
                value: 'Temps entre démande et acceptation',
                description: null
            },
            {
                id: 9,
                name: null,
                label: 'something else',
                value: 'something else',
                description: null
            }
        ]
    }
  ];
  clientReports: SelectItemGroup[] = [];
  selectedReport: any;
  constructor() { }

  ngOnInit(): void {
    this.clientReports = this.sourceData.map(g => {
      return { label: g.label, items: g.items.map(i => ({ label: i.label, value: i })) };
    });
  }
  onReportChange(event: any) {
    this.selectedReport = event.value;
    console.log(this.selectedReport);
  }
}
