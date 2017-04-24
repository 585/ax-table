import { EventEmitter, Injectable } from '@angular/core';

export interface IAxTablePagination {
    pageSize: number;
    page: number;
    offset: number;
}

@Injectable()
export class PaginationService {

    paginator: IAxTablePagination;
    $paginator: EventEmitter<IAxTablePagination>;

    constructor() {
        this.paginator = {
            pageSize: 10,
            page: 1,
            offset: 1
        };
        this.$paginator = new EventEmitter();
    }

    pageUp() {
        this.paginator.page++;
        this.$paginator.emit(this.paginator);
    }

    pageDown() {
        if (this.paginator.page !== 1) {
            this.paginator.page--;
        }
        this.$paginator.emit(this.paginator);
    }

    setPageSize(value: number) {
        this.paginator.pageSize = value;
        this.$paginator.emit(this.paginator);
    }

}
