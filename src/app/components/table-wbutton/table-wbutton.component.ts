import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-wbutton',
  templateUrl: './table-wbutton.component.html',
  styleUrls: ['./table-wbutton.component.scss']
})
export class TableWButtonComponent {
  @Input() headers: string[];
  @Input() rowData: (string|number|boolean)[][];
  constructor(private router: Router) {
    this.headers = [''];
    this.rowData = [];
  }

  onClick(ID: number | string | boolean){
    const query = {ID: ID}
    this.router.navigate([`/exp`], { queryParams: query});
  }
}
