import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-testing',
  templateUrl: './table-testing.component.html',
  styleUrls: ['./table-testing.component.css']
})
export class TableTestingComponent implements OnInit {
  cars: any[];
  cols: any[];

  constructor() { }

  ngOnInit() {
    // this.carService.getCarsSmall().then(cars => this.cars = cars);
    this.cars = [
      { status: 'pi-compass', vin: '938429huhed98ujq3', year: '2017', brand: 'Acura', color: 'Silver' }
    ];
    this.cols = [
        { field: 'status', header: 'Status' },
        { field: 'vin', header: 'Vin' },
        { field: 'year', header: 'Year' },
        { field: 'brand', header: 'Brand' },
        { field: 'color', header: 'Color' }
    ];
  }
}
