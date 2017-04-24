import { Component, Input } from '@angular/core';
import { SortService } from '../../services/sort.service';

@Component({
    selector: 'ax-table-cell-header',
    templateUrl: './ax-table-cell-header.component.html',
    styleUrls: ['./ax-table-cell-header.component.scss']
})
export class AxTableCellHeaderComponent {
    @Input() key: string;
    sortOrder: string;

    constructor(private sortService: SortService) {}

    sortColumn() {
      this.sortOrder = this.sortService.sortColumn(this.key);
    }

}
