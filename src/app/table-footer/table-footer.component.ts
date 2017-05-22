import { Component, Input, OnInit } from '@angular/core';
import { TableRef } from '../../models/table-ref';

@Component({
    selector: 'ax-table-footer',
    templateUrl: './table-footer.component.html',
    styleUrls: ['./table-footer.component.scss']
})
export class AxTableFooterComponent implements OnInit {

    @Input() table: TableRef;

    constructor() {
    }

    ngOnInit() {
    }

}
