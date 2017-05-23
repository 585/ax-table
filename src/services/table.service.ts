import { Injectable } from '@angular/core';
import { TableRef } from '../models/table-ref';
import { IAxTableSetup } from '../app/table/table.component';

@Injectable()
export class TableService {
    constructor() {}

    create(setup?: IAxTableSetup): TableRef {
        return new TableRef(setup);
    }
}
