import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxTableCellComponent } from './ax-table-cell.component';

describe('AxTableCellComponent', () => {
  let component: AxTableCellComponent;
  let fixture: ComponentFixture<AxTableCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxTableCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
