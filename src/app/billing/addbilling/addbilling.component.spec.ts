import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbillingComponent } from './addbilling.component';

describe('AddbillingComponent', () => {
  let component: AddbillingComponent;
  let fixture: ComponentFixture<AddbillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddbillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
