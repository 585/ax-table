import { Component, Input, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { AxTableRowComponent } from '../ax-table-row/ax-table-row.component';
import { AxTableHeaderComponent } from '../ax-table-header/ax-table-header.component';
import { IAxTableRowSelection } from '../../services/selection.service';

export interface IAxTableAction {
    label: string;
    callback(selection: IAxTableRowSelection[]): void;
    enable(selection: IAxTableRowSelection[]): void;
}

interface IAxTableSetup {
    columns: IAxTableColumns[];
    actions: IAxTableAction[];
}

interface IAxTableColumns {
    key: string;
    label: string;
    tooltip: string;
}

@Component({
    selector: 'ax-table',
    templateUrl: './ax-table.component.html',
    styleUrls: ['./ax-table.component.scss']
})
export class AxTableComponent implements OnInit {

    @ViewChildren(AxTableRowComponent) rows: AxTableRowComponent;
    @ViewChild(AxTableHeaderComponent) header: AxTableHeaderComponent;
    @Input() setup: IAxTableSetup;
    @Input() data: any[];
    @Output() onPage;
    @Output() onSort;
    @Output() onSelect;

    constructor() {
        this.setup = {
            columns: [
                {
                    key: 'name',
                    label: 'Name',
                    tooltip: 'Name'
                },
                {
                    key: 'lastName',
                    label: 'Last Name',
                    tooltip: 'Name'
                },
                {
                    key: 'birthday',
                    label: 'Birthday',
                    tooltip: 'Name'
                },
                {
                    key: 'comment',
                    label: 'Comment',
                    tooltip: 'Name'
                }
            ],
            actions: [
                {
                    label: 'Action1',
                    callback: (selection: IAxTableRowSelection[]) => console.log('hello action!', selection),
                    enable: (selection: IAxTableRowSelection[]) => console.log('hello enable action', selection)
                },
                {
                    label: 'Action2',
                    callback: (selection: IAxTableRowSelection[]) => console.log('hello action!', selection),
                    enable: (selection: IAxTableRowSelection[]) => console.log('hello enable action', selection)
                }
            ]
        };
        this.data = [
            {name: 'Denis', lastName: 'Havranek', birthday: '5/5/85', comment: 'Hey lalalala!'},
            {name: 'Denis2', lastName: 'Havranek', birthday: '5/5/85', comment: 'Hey lalalala!'},
            {name: 'Denis3', lastName: 'Havranek', birthday: '5/5/85', comment: 'Hey lalalala!'}
        ];
    }

    ngOnInit() {
        console.log(this.rows, this.header);
    }

}
