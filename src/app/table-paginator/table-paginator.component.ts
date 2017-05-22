import { AfterContentInit, Component, Input } from '@angular/core';
import { MdSelectChange } from '@angular/material';
import { TableRef } from '../../models/table-ref';

@Component({
    selector: 'ax-table-paginator',
    templateUrl: './table-paginator.component.html',
    styleUrls: ['./table-paginator.component.scss']
})
export class TablePaginatorComponent implements AfterContentInit {

    @Input() table: TableRef;

    pageSize: number;

    constructor() {

    }

    ngAfterContentInit() {
        this.table.$paginator.subscribe((paginator) => {
            this.pageSize = paginator.pageSize;
        });
    }

    pageUp() {
        this.table.pageUp();
    }

    pageDown() {
        this.table.pageDown();
    }

    setPageSize(event: MdSelectChange) {
        this.table.setPageSize(event.value);
    }

}
