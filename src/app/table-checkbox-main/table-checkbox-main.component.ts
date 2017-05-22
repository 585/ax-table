import { AfterContentInit, Component, Input, OnDestroy } from '@angular/core';
import { MdCheckboxChange } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { TableRef } from '../../models/table-ref';

@Component({
    selector: 'ax-table-checkbox-main',
    templateUrl: './table-checkbox-main.component.html',
    styleUrls: ['./table-checkbox-main.component.scss']
})
export class TableCheckboxMainComponent implements AfterContentInit, OnDestroy {

    @Input() table: TableRef;

    checked: boolean;
    indeterminate: boolean;
    sub: Subscription;

    constructor() {

    }

    ngAfterContentInit() {
        this.sub = this.table.$selection.subscribe(selection => {
            this.checked = selection.length !== 0;
            this.indeterminate = selection.length !== this.table.data.length && selection.length !== 0;
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    checkboxChanged(event: MdCheckboxChange): void {
        if (event.checked) {
            this.table.addSelectedRows();
        } else {
            this.table.removeAllRows();
        }
    }
}
