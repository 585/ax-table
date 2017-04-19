import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxTableFooterComponent } from './ax-table-footer.component';

describe('AxTableFooterComponent', () => {
  let component: AxTableFooterComponent;
  let fixture: ComponentFixture<AxTableFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxTableFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxTableFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
