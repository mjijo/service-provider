import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgragebillingComponent } from './upgragebilling.component';

describe('UpgragebillingComponent', () => {
  let component: UpgragebillingComponent;
  let fixture: ComponentFixture<UpgragebillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgragebillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpgragebillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
