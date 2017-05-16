import { Component, Input } from '@angular/core';
import { ThumbComponent } from '../thumb/thumb.component';

@Component({
    selector: 'ax-thumb-container',
    templateUrl: './thumb-container.component.html',
    styleUrls: ['./thumb-container.component.scss']
})
export class ThumbContainerComponent {
    @Input() thumb: ThumbComponent;
    @Input() rowData: any;

    constructor() {
    }

}
