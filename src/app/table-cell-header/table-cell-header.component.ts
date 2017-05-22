import { Component, Input } from '@angular/core';
import { TableRef } from '../../models/table-ref';

@Component({
    selector: 'ax-table-cell-header',
    templateUrl: './table-cell-header.component.html',
    styleUrls: ['./table-cell-header.component.scss']
})
export class AxTableCellHeaderComponent {
    @Input() key: string;
    @Input() table: TableRef;

    sortOrder: string;

    constructor() {}

    sortColumn() {
      this.sortOrder = this.table.sortColumn(this.key);
    }

}
