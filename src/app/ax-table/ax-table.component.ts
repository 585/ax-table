import { Component, EventEmitter, Input, Output, ViewChild, ViewChildren } from '@angular/core';
import { AxTableRowComponent } from '../ax-table-row/ax-table-row.component';
import { AxTableHeaderComponent } from '../ax-table-header/ax-table-header.component';
import { IAxTableRowSelection, SelectionService } from '../../services/selection.service';
import { IAxTablePagination, PaginationService } from '../../services/pagination.service';
import { SortService } from '../../services/sort.service';

export interface IAxTableAction {
    label: string;
    callback(selection: IAxTableRowSelection[]): void;
    enable(selection: IAxTableRowSelection[]): void;
}

export interface IAxTableSetup {
    columns: IAxTableColumns[];
    actions: IAxTableAction[];
}

interface IAxTableColumns {
    key: string;
    label: string;
    tooltip: string;
}

@Component({
    selector: 'ax-table',
    templateUrl: './ax-table.component.html',
    styleUrls: ['./ax-table.component.scss']
})
export class AxTableComponent {

    @ViewChildren(AxTableRowComponent) rows: AxTableRowComponent;
    @ViewChild(AxTableHeaderComponent) header: AxTableHeaderComponent;

    @Input() setup: IAxTableSetup;
    @Input() data: any[];

    @Output() onPage: EventEmitter<IAxTablePagination>;
    @Output() onSort: EventEmitter<any>;
    @Output() onSelect: EventEmitter<IAxTableRowSelection[]>;

    constructor(
        private paginationService: PaginationService,
        private selectionService: SelectionService,
        private sortService: SortService
    ) {
        this.onPage = this.paginationService.$paginator;
        this.onSelect = this.selectionService.$selection;
        this.onSort = this.sortService.$sort;
    }

}
