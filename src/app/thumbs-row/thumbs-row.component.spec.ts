import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbsRowComponent } from './thumbs-row.component';

describe('ThumbsRowComponent', () => {
  let component: ThumbsRowComponent;
  let fixture: ComponentFixture<ThumbsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
