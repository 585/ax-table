import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCheckboxMainComponent } from './table-checkbox-main.component';

describe('TableCheckboxMainComponent', () => {
  let component: TableCheckboxMainComponent;
  let fixture: ComponentFixture<TableCheckboxMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCheckboxMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCheckboxMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
