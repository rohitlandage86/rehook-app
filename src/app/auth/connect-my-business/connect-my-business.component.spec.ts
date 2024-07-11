import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectMyBusinessComponent } from './connect-my-business.component';

describe('ConnectMyBusinessComponent', () => {
  let component: ConnectMyBusinessComponent;
  let fixture: ComponentFixture<ConnectMyBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectMyBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectMyBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
