import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class SortService {

    sort: any;
    $sort: EventEmitter<any>;

    constructor() {
        this.sort = {};
        this.$sort = new EventEmitter();
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
        this.$sort.emit(this.sort);
        return this.sort[key];
    }

}
