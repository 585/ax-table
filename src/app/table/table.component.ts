import {
    AfterContentInit,
    Component, ContentChild, ContentChildren, EventEmitter, Input, Output, QueryList, ViewChild,
    ViewChildren
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
export class AxTableComponent implements AfterContentInit {

    @ViewChildren(AxTableRowComponent) rows: QueryList<AxTableRowComponent>;
    @ViewChild(AxTableHeaderComponent) header: AxTableHeaderComponent;

    @ContentChildren(CustomCellComponent) customCells: QueryList<CustomCellComponent>;
    @ContentChild(ThumbComponent) thumb: ThumbComponent;

    @Input() data: any[];
    @Input() setup: IAxTableSetup;
    @Input() viewMode: AxViewModeEnum;

    @Output() onPage: EventEmitter<IAxTablePagination>;
    @Output() onSort: EventEmitter<any>;
    @Output() onSelect: EventEmitter<IAxTableRowSelection[]>;

    table: TableRef;

    constructor(private tableService: TableService) {
        this.onPage = new EventEmitter();
        this.onSort = new EventEmitter();
        this.onSelect = new EventEmitter();
    }

    ngAfterContentInit() {
        this.table = this.tableService.create(this.setup).setData(this.data);

        this.table.$paginator.subscribe(paginator => {
            this.onPage.next(paginator);
        });

        this.table.$selection.subscribe(selection => {
            this.onSelect.next(selection);
        });

        this.table.$sort.subscribe(sort => {
            this.onSort.next(sort);
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
