import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YelpReviewComponent } from './yelp-review.component';

describe('YelpReviewComponent', () => {
  let component: YelpReviewComponent;
  let fixture: ComponentFixture<YelpReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YelpReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YelpReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
