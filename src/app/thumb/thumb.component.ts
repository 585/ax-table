import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'ax-thumb',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.scss']
})
export class ThumbComponent {

    @ContentChild('thumb') template: TemplateRef<Object>;

    constructor() {

    }

}
