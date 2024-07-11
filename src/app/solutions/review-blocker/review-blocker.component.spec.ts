import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewBlockerComponent } from './review-blocker.component';

describe('ReviewBlockerComponent', () => {
  let component: ReviewBlockerComponent;
  let fixture: ComponentFixture<ReviewBlockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewBlockerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewBlockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
