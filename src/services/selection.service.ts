import { EventEmitter, Injectable } from '@angular/core';

export interface IAxTableRowSelection {
    index: number;
    data: any;
}

@Injectable()
export class SelectionService {

    selection: IAxTableRowSelection[];
    $selection: EventEmitter<IAxTableRowSelection[]>;
    $mainSelection: EventEmitter<boolean>;

    constructor() {
        this.selection = [];
        this.$selection = new EventEmitter();
        this.$mainSelection = new EventEmitter();
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

    addSelectedRows(rows: any[]): void {
        const selection = [];
        rows.forEach((row, index) => {
            selection.push({
                index: index,
                data: row
            });
        });
        this.selection = selection;
        this.$selection.emit(this.selection);
        this.$mainSelection.emit(true);
    }

    removeAllRows(): void {
        this.selection = [];
        this.$selection.emit(this.selection);
        this.$mainSelection.emit(false);
    }

}
