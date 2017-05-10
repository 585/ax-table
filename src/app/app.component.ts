import { Component } from '@angular/core';
import { IAxTableRowSelection } from '../services/selection.service';
import { IAxTableSetup } from './ax-table/ax-table.component';

@Component({
    selector: 'ax-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ax grid';
    setup: IAxTableSetup;
    data: any[];

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
                    tooltip: 'Last Name'
                },
                {
                    key: 'birthday',
                    label: 'Birthday',
                    tooltip: 'Birthday'
                },
                {
                    key: 'comment',
                    label: 'Comment',
                    tooltip: 'Comment'
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
            {name: 'Denis', lastName: 'Havranek', birthday: new Date().setMonth(5), comment: 'Hey lalalala!'},
            {name: 'Denis2', lastName: 'Havranek', birthday: new Date(), comment: 'Hey lalalala!'},
            {name: 'Denis3', lastName: 'Havranek', birthday: new Date(), comment: 'Hey lalalala!'}
        ];
    }

    onPage(event: any) {
        console.log('PAGE:', event);
    }

    onSelect(event: any) {
        console.log('SELECT:', event);
    }

    onSort(event: any) {
        console.log('SORT:', event);
    }
}
