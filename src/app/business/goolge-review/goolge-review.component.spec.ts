import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoolgeReviewComponent } from './goolge-review.component';

describe('GoolgeReviewComponent', () => {
  let component: GoolgeReviewComponent;
  let fixture: ComponentFixture<GoolgeReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoolgeReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoolgeReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
