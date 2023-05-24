import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-wbutton',
  templateUrl: './table-wbutton.component.html',
  styleUrls: ['./table-wbutton.component.scss']
})
export class TableWButtonComponent {
  @Input() headers: string[];
  @Input() rowData: (string|number|boolean)[][];
  constructor() {
    this.headers = [''];
    this.rowData = [];
  }
}
