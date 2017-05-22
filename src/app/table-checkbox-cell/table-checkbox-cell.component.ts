import { AfterContentInit, Component, Input, OnDestroy } from '@angular/core';
import { MdCheckboxChange } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { TableRef } from '../../models/table-ref';

@Component({
    selector: 'ax-table-checkbox-cell',
    templateUrl: './table-checkbox-cell.component.html',
    styleUrls: ['./table-checkbox-cell.component.scss']
})
export class TableCheckboxCellComponent implements AfterContentInit, OnDestroy {

    @Input() rowIndex: number;
    @Input() data: any;
    @Input() table: TableRef;

    checked: boolean;
    sub: Subscription;

    constructor() {

    }

    ngAfterContentInit() {
        this.sub = this.table.$mainSelection.subscribe(value => {
            this.checked = value;
        });
    }

    checkboxChanged(event: MdCheckboxChange): void {
        this.checked = event.checked;
        if (event.checked) {
            this.table.addSelectedRow({
                index: this.rowIndex,
                data: this.data
            });
        } else {
            this.table.removeSelectedRow(this.rowIndex);
        }
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
