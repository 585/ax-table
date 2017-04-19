import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MdCheckboxChange } from '@angular/material';
import { SelectionService } from '../../services/selection.service';


@Component({
    selector: 'ax-table-checkbox-cell',
    templateUrl: './table-checkbox-cell.component.html',
    styleUrls: ['./table-checkbox-cell.component.scss']
})
export class TableCheckboxCellComponent {

    @Input() rowIndex: number;
    @Input() data: any;

    constructor(private selectionService: SelectionService) {

    }

    checkboxChanged(event: MdCheckboxChange): void {
        if (event.checked) {
            this.selectionService.addSelectedRow({
                index: this.rowIndex,
                data: this.data
            });
        } else {
            this.selectionService.removeSelectedRow(this.rowIndex);
        }
    }

}
