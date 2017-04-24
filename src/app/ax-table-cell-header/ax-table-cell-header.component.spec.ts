import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxTableCellHeaderComponent } from './ax-table-cell-header.component';

describe('AxTableCellHeaderComponent', () => {
  let component: AxTableCellHeaderComponent;
  let fixture: ComponentFixture<AxTableCellHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxTableCellHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxTableCellHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
