import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdCheckboxModule, MdIconModule, MdSelectModule, MdTooltipModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AxTableComponent } from './ax-table/ax-table.component';
import { AxTableHeaderComponent } from './ax-table-header/ax-table-header.component';
import { AxTableCellComponent } from './ax-table-cell/ax-table-cell.component';
import { AxTableRowComponent } from './ax-table-row/ax-table-row.component';
import { AxTableFooterComponent } from './ax-table-footer/ax-table-footer.component';
import { AxTableActionHeaderComponent } from './ax-table-action-header/ax-table-action-header.component';
import { TableActionsComponent } from './table-actions/table-actions.component';
import { TablePaginatorComponent } from './table-paginator/table-paginator.component';
import { TableCheckboxCellComponent } from './table-checkbox-cell/table-checkbox-cell.component';
import { SelectionService } from '../services/selection.service';
import { PaginationService } from '../services/pagination.service';
import { AxTableCellHeaderComponent } from './ax-table-cell-header/ax-table-cell-header.component';
import { SortService } from '../services/sort.service';
import { CustomCellComponent } from './custom-cell/custom-cell.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { TableCheckboxMainComponent } from './table-checkbox-main/table-checkbox-main.component';

@NgModule({
    declarations: [
        AppComponent,
        AxTableComponent,
        AxTableHeaderComponent,
        AxTableCellComponent,
        AxTableRowComponent,
        AxTableFooterComponent,
        AxTableActionHeaderComponent,
        TableActionsComponent,
        TablePaginatorComponent,
        TableCheckboxCellComponent,
        AxTableCellHeaderComponent,
        CustomCellComponent,
        TableBodyComponent,
        TableCheckboxMainComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MdCheckboxModule,
        MdTooltipModule,
        MdIconModule,
        MdSelectModule,
        MdButtonModule,
        NoopAnimationsModule
    ],
    exports: [
        AxTableComponent,
        CustomCellComponent
    ],
    entryComponents: [
        CustomCellComponent
    ],
    providers: [
        SelectionService,
        PaginationService,
        SortService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
