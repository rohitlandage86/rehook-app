import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMarketingComponent } from './text-marketing.component';

describe('TextMarketingComponent', () => {
  let component: TextMarketingComponent;
  let fixture: ComponentFixture<TextMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextMarketingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
