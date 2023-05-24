import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  tableData: any[] = [
    { id: 1, nombre: 'John', evolucion: 'Some evolution', estado: 'Active', genero: 'Male', edad: 25, expediente: 'ABC123' },
    { id: 2, nombre: 'Jane', evolucion: 'Another evolution', estado: 'Inactive', genero: 'Female', edad: 30, expediente: 'DEF456' },
    // Add more data objects as needed
  ];

}
