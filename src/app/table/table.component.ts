import {
    AfterContentInit,
    Component, ContentChild, ContentChildren, EventEmitter, Input, OnChanges, Output, QueryList,
    ViewChild, ViewChildren
} from '@angular/core';
import { AxTableRowComponent } from '../table-row/table-row.component';
import { AxTableHeaderComponent } from '../table-header/table-header.component';
import { CustomCellComponent } from '../custom-cell/custom-cell.component';
import { ThumbComponent } from '../thumb/thumb.component';
import { TableRef } from '../../models/table-ref';
import { TableService } from '../../services/table.service';
import { IAxTableRowSelection } from '../../models/table-row-selection.interface';
import { IAxTablePagination } from '../../models/table-pagination.interface';

export interface IAxTableAction {
    label: string;
    callback(selection: IAxTableRowSelection[]): void;
    enable(selection: IAxTableRowSelection[]): boolean;
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

enum AxViewModeEnum {
    TABLE,
    THUMBS
}

@Component({
    selector: 'ax-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class AxTableComponent implements AfterContentInit, OnChanges {

    @ViewChildren(AxTableRowComponent) rows: QueryList<AxTableRowComponent>;
    @ViewChild(AxTableHeaderComponent) header: AxTableHeaderComponent;

    @ContentChildren(CustomCellComponent) customCells: QueryList<CustomCellComponent>;
    @ContentChild(ThumbComponent) thumb: ThumbComponent;

    @Input() data: any[];
    @Input() setup: IAxTableSetup;
    @Input() viewMode: AxViewModeEnum;
    @Input() totalRecords: number;

    @Output() onPage: EventEmitter<IAxTablePagination>;
    @Output() onSort: EventEmitter<any>;
    @Output() onSelect: EventEmitter<IAxTableRowSelection[]>;
    @Output() onReady: EventEmitter<any>;

    table: TableRef;

    constructor(private tableService: TableService) {
        this.viewMode = 0;
        this.table = this.tableService.create();
        this.onReady = new EventEmitter();
        this.onPage = this.table.$pagination;
        this.onSort = this.table.$sort;
        this.onSelect = this.table.$selection;
    }

    ngOnChanges(changes) {
        if (changes.data && !changes.data.firstChange) {
            this.table.setData(changes.data.currentValue);
        }
        if (changes.totalRecords !== undefined) {
            this.table.totalRecords = changes.totalRecords.currentValue;
        }
    }

    ngAfterContentInit() {
        this.table.setSetup(this.setup).setData(this.data);
        this.onReady.next({
            pagination: this.table.pagination,
            sort: this.table.sort
        });
    }

    getCustomCell(key: string): CustomCellComponent {
        return this.customCells.filter((item) => {
            return item.key === key;
        })[0];
    }

    toggleViewMode(): void {
        this.viewMode = (this.viewMode === AxViewModeEnum.TABLE) ? AxViewModeEnum.THUMBS : AxViewModeEnum.TABLE;
    }

}
