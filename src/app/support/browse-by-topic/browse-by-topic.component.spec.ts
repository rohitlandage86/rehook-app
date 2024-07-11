import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseByTopicComponent } from './browse-by-topic.component';

describe('BrowseByTopicComponent', () => {
  let component: BrowseByTopicComponent;
  let fixture: ComponentFixture<BrowseByTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseByTopicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseByTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
