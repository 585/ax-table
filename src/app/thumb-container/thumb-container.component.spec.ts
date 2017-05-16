import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbContainerComponent } from './thumb-container.component';

describe('ThumbContainerComponent', () => {
  let component: ThumbContainerComponent;
  let fixture: ComponentFixture<ThumbContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
