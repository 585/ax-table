import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IAxTableSetup } from '../app/table/table.component';
import { IAxTablePagination } from './table-pagination.interface';
import { IAxTableRowSelection } from './table-row-selection.interface';
import { EventEmitter } from '@angular/core';

export class TableRef {

    $data: BehaviorSubject<any[]>;
    $pagination: EventEmitter<IAxTablePagination>;
    $mainSelection: EventEmitter<boolean>;
    $selection: EventEmitter<IAxTableRowSelection[]>;
    $sort: EventEmitter<any>;

    data: any[];
    pagination: IAxTablePagination;
    selection: IAxTableRowSelection[];
    sort: any;
    totalRecords: number;

    constructor(public setup?: IAxTableSetup) {
        this.selection = [];
        this.pagination = {
            pageSize: 10,
            page: 1,
            offset: 0
        };
        this.sort = {};

        this.$data = new BehaviorSubject([]);
        this.$selection = new EventEmitter();
        this.$mainSelection = new EventEmitter();
        this.$pagination = new EventEmitter();
        this.$sort = new EventEmitter();
    }

    setSetup(setup: IAxTableSetup): TableRef {
        this.setup = setup;
        return this;
    }

    addSelectedRow(row: IAxTableRowSelection) {
        this.selection.push(row);
        this.$selection.next(this.selection);
    }

    removeSelectedRow(index: number): void {
        for (let i = 0, l = this.selection.length; i < l; i++) {
            if (this.selection[i].index === index) {
                this.selection.splice(i, 1);
                break;
            }
        }
        this.$selection.next(this.selection);
    }

    addSelectedRows(): void {
        const selection = [];
        this.data.forEach((row, index) => {
            selection.push({
                index: index,
                data: row
            });
        });
        this.selection = selection;
        this.$selection.next(this.selection);
        this.$mainSelection.next(true);
    }

    removeAllRows(): void {
        this.selection = [];
        this.$selection.next(this.selection);
        this.$mainSelection.next(false);
    }

    sortColumn(key: string): string {
        const prevSortOrder = this.sort[key];
        switch (prevSortOrder) {
            case 'ASC':
                this.sort[key] = 'DESC';
                break;
            case 'DESC':
                delete this.sort[key];
                break;
            default:
                this.sort[key] = 'ASC';
        }
        this.$sort.next(this.sort);
        return this.sort[key];
    }

    pageUp() {
        this.pagination.page++;
        this.setPageOffset();
        this.$pagination.next(this.pagination);
    }

    pageDown() {
        if (this.pagination.page !== 1) {
            this.pagination.page--;
            this.setPageOffset();
        }
        this.$pagination.next(this.pagination);
    }

    setPageSize(value: number) {
        this.pagination.pageSize = value;
        this.$pagination.next(this.pagination);
    }

    setData(data: any[]): TableRef {
        this.data = data;
        this.$data.next(this.data);
        return this;
    }

    private setPageOffset() {
        this.pagination.offset = (this.pagination.page - 1) * this.pagination.pageSize;
    }
}
