import { EventEmitter, Injectable } from '@angular/core';

export interface IAxTableRowSelection {
    index: number;
    data: any;
}

@Injectable()
export class SelectionService {

    selection: IAxTableRowSelection[];
    $selection: EventEmitter<IAxTableRowSelection[]>;

    constructor() {
        this.selection = [];
        this.$selection = new EventEmitter();
        // this.$selection.subscribe((vale) => console.log(`>> ${vale}`));
    }

    addSelectedRow(row: IAxTableRowSelection) {
        this.selection.push(row);
        this.$selection.emit(this.selection);
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

}
