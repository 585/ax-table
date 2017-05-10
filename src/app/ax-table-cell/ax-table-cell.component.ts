import {
    Component, Input
} from '@angular/core';
import { CustomCellComponent } from '../custom-cell/custom-cell.component';

@Component({
    selector: 'ax-table-cell',
    templateUrl: './ax-table-cell.component.html',
    styleUrls: ['./ax-table-cell.component.scss']
})
export class AxTableCellComponent {

    @Input() customCell: CustomCellComponent;
    @Input() rowData: any;
    @Input() cellData: any;

    constructor() {}

}
