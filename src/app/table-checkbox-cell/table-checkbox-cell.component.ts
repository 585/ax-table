import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { MdCheckboxChange } from '@angular/material';
import { SelectionService } from '../../services/selection.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
    selector: 'ax-table-checkbox-cell',
    templateUrl: './table-checkbox-cell.component.html',
    styleUrls: ['./table-checkbox-cell.component.scss']
})
export class TableCheckboxCellComponent implements OnDestroy {

    @Input() rowIndex: number;
    @Input() data: any;
    checked: boolean;
    sub: Subscription;

    constructor(private selectionService: SelectionService) {
        this.sub = selectionService.$mainSelection.subscribe(value => {
            this.checked = value;
        });
    }

    checkboxChanged(event: MdCheckboxChange): void {
        this.checked = event.checked;
        if (event.checked) {
            this.selectionService.addSelectedRow({
                index: this.rowIndex,
                data: this.data
            });
        } else {
            this.selectionService.removeSelectedRow(this.rowIndex);
        }
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
