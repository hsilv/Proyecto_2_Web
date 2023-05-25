import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-stock',
  templateUrl: './table-table-stock.component.html',
  styleUrls: ['./table-table-stock.component.scss']
})
export class TableStockComponent {
  @Input() headers: string[];
  @Input() rowData: (string|number|boolean)[][];
  constructor(private router: Router) {
    this.headers = [''];
    this.rowData = [];
  }

  onClick(){
  }
}
