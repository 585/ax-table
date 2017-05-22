import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxTableRowComponent } from './table-row.component';

describe('AxTableRowComponent', () => {
  let component: AxTableRowComponent;
  let fixture: ComponentFixture<AxTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
