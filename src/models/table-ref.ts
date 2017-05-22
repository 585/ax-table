import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IAxTableSetup } from '../app/table/table.component';
import { IAxTablePagination } from './table-pagination.interface';
import { IAxTableRowSelection } from './table-row-selection.interface';

export class TableRef {

    $data: BehaviorSubject<any[]>;
    $paginator: BehaviorSubject<IAxTablePagination>;
    $mainSelection: BehaviorSubject<boolean>;
    $selection: BehaviorSubject<IAxTableRowSelection[]>;
    $sort: BehaviorSubject<any>;

    data: any[];
    paginator: IAxTablePagination;
    selection: IAxTableRowSelection[];
    private sort: any;

    constructor(public setup: IAxTableSetup) {
        this.selection = [];
        this.paginator = {
            pageSize: 10,
            page: 1,
            offset: 1
        };
        this.sort = {};
        this.$data = new BehaviorSubject([]);
        this.$selection = new BehaviorSubject(this.selection);
        this.$mainSelection = new BehaviorSubject(false);
        this.$paginator = new BehaviorSubject(this.paginator);
        this.$sort = new BehaviorSubject(this.sort);
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

        this.sort = {};
        this.$sort = new BehaviorSubject(this.sort);

        this.paginator = {
            pageSize: 10,
            page: 1,
            offset: 1
        };
        this.$paginator = new BehaviorSubject(this.paginator);
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
        this.paginator.page++;
        this.$paginator.next(this.paginator);
    }

    pageDown() {
        if (this.paginator.page !== 1) {
            this.paginator.page--;
        }
        this.$paginator.next(this.paginator);
    }

    setPageSize(value: number) {
        this.paginator.pageSize = value;
        this.$paginator.next(this.paginator);
    }

    setData(data: any[]): TableRef {
        this.data = data;
        this.$data.next(this.data);
        return this;
    }
}
