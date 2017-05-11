import { Component, Input, OnDestroy } from '@angular/core';
import { SelectionService } from '../../services/selection.service';
import { MdCheckboxChange } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'ax-table-checkbox-main',
    templateUrl: './table-checkbox-main.component.html',
    styleUrls: ['./table-checkbox-main.component.scss']
})
export class TableCheckboxMainComponent implements OnDestroy {

    @Input() data: any;
    checked: boolean;
    indeterminate: boolean;
    sub: Subscription;

    constructor(private selectionService: SelectionService) {
        this.sub = selectionService.$selection.subscribe(selection => {
            this.checked = selection.length !== 0;
            this.indeterminate = selection.length !== this.data.length && selection.length !== 0;
        });
    }


    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    checkboxChanged(event: MdCheckboxChange): void {
        if (event.checked) {
            this.selectionService.addSelectedRows(this.data);
        } else {
            this.selectionService.removeAllRows();
        }
    }
}
