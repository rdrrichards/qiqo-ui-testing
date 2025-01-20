import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-table-testing',
    templateUrl: './table-testing.component.html',
    styleUrls: ['./table-testing.component.css'],
    standalone: false
})
export class TableTestingComponent implements OnInit {
  cars: Observable<any[]>;
  cols: any[];
  selectedResults: any[] = [];
  trackByFunction = (index: number, item: any) => item.vin;
  ngOnInit() {
    // this.carService.getCarsSmall().then(cars => this.cars = cars);
    this.lodaData();
    this.cols = [
        { field: 'status', header: 'Status' },
        { field: 'vin', header: 'Vin' },
        { field: 'year', header: 'Year' },
        { field: 'brand', header: 'Brand' },
        { field: 'color', header: 'Color' }
    ];
  }
  sortTable(event: any) {
    console.log(event);
    this.lodaData();
  }
  headerCheckboxToggled(event: any) {
    // this.headerCheckboxToggle.emit(event.checked);
    // this.buildContextMenu();
  }
  rowSelected(event: any) {
    event.originalEvent.stopPropagation();
    // this.rowSelect.emit(this.selectedResults.length > 0);
    // this.buildContextMenu();
  }
  rowUnselected(event: any) {
    // this.rowUnselect.emit(this.selectedResults.length > 0);
    // this.buildContextMenu();
  }
  lodaData() {
    this.cars = of([
      { status: 'pi-thumbs-up', statusColor: 'red', vin: '938429huhed98ujq3', year: '2017', brand: 'Acura', color: 'Silver' },
      { status: 'pi-check-circle', statusColor: 'blue', vin: 'huhed98ujq3938429', year: '2020', brand: 'Toyota', color: 'Blue' },
      { status: 'pi-times-circle', statusColor: 'green', vin: '98ujq3938429huhed', year: '2019', brand: 'Honda', color: 'Black' },
      { status: 'pi-check-circle', statusColor: 'orange', vin: '3huhed98ujq393842', year: '2018', brand: 'Nissan', color: 'Orange' },
      { status: 'pi-times-circle', statusColor: 'purple', vin: 'hed98ujq3938429hu', year: '2017', brand: 'Renault', color: 'Gray' },
      { status: 'pi-check-circle', statusColor: 'teal', vin: 'uhed98ujq3938429h', year: '2016', brand: 'Volkswagen', color: 'Silver' },
      { status: 'pi-times-circle', statusColor: 'violet', vin: '98ujq3938429huhe', year: '2015', brand: 'Volvo', color: 'White' }
    ]);
  }
}
