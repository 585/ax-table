import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxTableActionHeaderComponent } from './ax-table-action-header.component';

describe('AxTableActionHeaderComponent', () => {
  let component: AxTableActionHeaderComponent;
  let fixture: ComponentFixture<AxTableActionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxTableActionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxTableActionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
