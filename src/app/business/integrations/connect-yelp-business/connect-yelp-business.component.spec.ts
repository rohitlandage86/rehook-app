import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectYelpBusinessComponent } from './connect-yelp-business.component';

describe('ConnectYelpBusinessComponent', () => {
  let component: ConnectYelpBusinessComponent;
  let fixture: ComponentFixture<ConnectYelpBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectYelpBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectYelpBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
