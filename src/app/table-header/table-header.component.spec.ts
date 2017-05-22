import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxTableHeaderComponent } from './table-header.component';

describe('AxTableHeaderComponent', () => {
  let component: AxTableHeaderComponent;
  let fixture: ComponentFixture<AxTableHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxTableHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
