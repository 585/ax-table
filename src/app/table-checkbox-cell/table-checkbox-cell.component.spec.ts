import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCheckboxCellComponent } from './table-checkbox-cell.component';

describe('TableCheckboxCellComponent', () => {
  let component: TableCheckboxCellComponent;
  let fixture: ComponentFixture<TableCheckboxCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCheckboxCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCheckboxCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
