import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnifiedInboxComponent } from './unified-inbox.component';

describe('UnifiedInboxComponent', () => {
  let component: UnifiedInboxComponent;
  let fixture: ComponentFixture<UnifiedInboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnifiedInboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnifiedInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
