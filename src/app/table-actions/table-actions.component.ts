import { AfterContentInit, Component, Input, OnDestroy } from '@angular/core';
import { IAxTableAction } from '../table/table.component';
import { Subscription } from 'rxjs/Subscription';
import { TableRef } from '../../models/table-ref';
import { IAxTableRowSelection } from '../../models/table-row-selection.interface';

@Component({
    selector: 'ax-table-actions',
    templateUrl: './table-actions.component.html',
    styleUrls: ['./table-actions.component.scss']
})
export class TableActionsComponent implements OnDestroy, AfterContentInit {

    @Input() table: TableRef;

    disabledStatuses: boolean[];
    sub: Subscription;

    constructor() {

    }

    ngAfterContentInit() {
        this.disabledStatuses = [];
        this.sub = this.table.$selection.subscribe(
            (selection: IAxTableRowSelection[]) => {
                this.table.setup.actions.forEach((action: IAxTableAction, index) => {
                    this.disabledStatuses[index] = !action.enable(selection);
                });
            }
        );
        this.table.setup.actions.forEach((action: IAxTableAction) => {
            this.disabledStatuses.push(!action.enable([]));
        });
    }

    executeAction(action: IAxTableAction): void {
        action.callback(this.table.selection);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
