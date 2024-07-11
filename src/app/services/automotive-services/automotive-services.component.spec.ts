import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotiveServicesComponent } from './automotive-services.component';

describe('AutomotiveServicesComponent', () => {
  let component: AutomotiveServicesComponent;
  let fixture: ComponentFixture<AutomotiveServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomotiveServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomotiveServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
