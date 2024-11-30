import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-so-table',
    templateUrl: './so-table.component.html',
    styleUrls: ['./so-table.component.css'],
    standalone: false
})
export class SoTableComponent implements OnInit {
  selectedMembership: any;
  cols = [
    { field: 'membership', header: 'Membership' },
    { field: 'joinDate', header: 'Date Joined' },
    { field: 'endDate', header: 'Date Ended' }
  ];
  memberships = [{
    "membership": "123456789",
    "joinDate": "1963-09-01T10:00:00.000+00:00",
    "endDate": null,
    "dependents": [
      {
        "id": "2345678",
        "membership": "123456789",
        "dependent": "0",
        "joinDate": "1963-09-01T10:00:00.000+00:00",
        "endDate": null,
        "dependentDetail": {
          "id": "2345678",
          "surname": "SUMMERS",
          "firstNames": "CYCLOPS"
        },
        "programs": []
      },
      {
        "id": "2345679",
        "membership": "123456789",
        "dependent": "1",
        "joinDate": "1969-03-01T10:00:00.000+00:00",
        "endDate": null,
        "dependentDetail": {
          "id": "2345679",
          "surname": "SUMMERS",
          "firstNames": "HAVOK"
        },
        "programs": []
      },
      {
        "id": "2345680",
        "membership": "123456789",
        "dependent": "0",
        "joinDate": "2006-01-01T10:00:00.000+00:00",
        "endDate": null,
        "dependentDetail": {
          "id": "2345680",
          "surname": "SUMMERS",
          "firstNames": "VULCAN"
        },
        "programs": [
          {
            "id": "PROGRAM101829",
            "programName": "Shiar Imperium",
            "startDate": "2006-01-01T10:00:00.000+00:00",
            "endDate": null
          }
        ]
      }
    ]}]
  constructor() { }

  ngOnInit(): void {
  }

}
