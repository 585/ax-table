import { Component, Input, OnDestroy } from '@angular/core';
import { IAxTableRowSelection, SelectionService } from '../../services/selection.service';
import { IAxTableAction } from '../ax-table/ax-table.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'ax-table-actions',
    templateUrl: './table-actions.component.html',
    styleUrls: ['./table-actions.component.scss']
})
export class TableActionsComponent implements OnDestroy {

    @Input() actions: IAxTableAction[];
    sub: Subscription;

    constructor(private selectionService: SelectionService) {
        this.sub = this.selectionService.$selection.subscribe(
            (selection: IAxTableRowSelection[]) => {
                this.actions.forEach((action: IAxTableAction) => {
                    action.enable(selection);
                });
            }
        );
    }

    executeAction(action: IAxTableAction): void {
        action.callback(this.selectionService.selection);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
