import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectGoogleBusinessComponent } from './connect-google-business.component';

describe('ConnectGoogleBusinessComponent', () => {
  let component: ConnectGoogleBusinessComponent;
  let fixture: ComponentFixture<ConnectGoogleBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectGoogleBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectGoogleBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
