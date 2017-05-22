import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdCheckboxModule, MdIconModule, MdSelectModule, MdTooltipModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AxTableComponent } from './table/table.component';
import { AxTableHeaderComponent } from './table-header/table-header.component';
import { AxTableCellComponent } from './table-cell/table-cell.component';
import { AxTableRowComponent } from './table-row/table-row.component';
import { AxTableFooterComponent } from './table-footer/table-footer.component';
import { AxTableActionHeaderComponent } from './table-action-header/table-action-header.component';
import { TableActionsComponent } from './table-actions/table-actions.component';
import { TablePaginatorComponent } from './table-paginator/table-paginator.component';
import { TableCheckboxCellComponent } from './table-checkbox-cell/table-checkbox-cell.component';
import { AxTableCellHeaderComponent } from './table-cell-header/table-cell-header.component';
import { CustomCellComponent } from './custom-cell/custom-cell.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { TableCheckboxMainComponent } from './table-checkbox-main/table-checkbox-main.component';
import { ThumbComponent } from './thumb/thumb.component';
import { ThumbContainerComponent } from './thumb-container/thumb-container.component';
import { ThumbsRowComponent } from './thumbs-row/thumbs-row.component';
import { DataToThumbsSetPipe } from '../pipes/data-to-thumbs-set.pipe';
import { TableService } from '../services/table.service';

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
        TableCheckboxMainComponent,
        ThumbComponent,
        ThumbContainerComponent,
        ThumbsRowComponent,
        DataToThumbsSetPipe
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
        CustomCellComponent,
        ThumbComponent
    ],
    entryComponents: [
        CustomCellComponent
    ],
    providers: [
        TableService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
