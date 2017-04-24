import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../services/pagination.service';
import { MdSelectChange } from '@angular/material';

@Component({
    selector: 'ax-table-paginator',
    templateUrl: './table-paginator.component.html',
    styleUrls: ['./table-paginator.component.scss']
})
export class TablePaginatorComponent implements OnInit {

    pageSize: number;

    constructor(private paginationService: PaginationService) {
        this.pageSize = paginationService.paginator.pageSize;
    }

    ngOnInit() {
    }

    pageUp() {
        this.paginationService.pageUp();
    }

    pageDown() {
        this.paginationService.pageDown();
    }

    setPageSize(event: MdSelectChange) {
        this.paginationService.setPageSize(event.value);
    }

}
