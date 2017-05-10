import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'ax-custom-cell',
    templateUrl: './custom-cell.component.html',
    styleUrls: ['./custom-cell.component.scss']
})
export class CustomCellComponent {

    @ContentChild('customCell') template: TemplateRef<Object>;
    @Input() key: string;

    constructor() {

    }

}
