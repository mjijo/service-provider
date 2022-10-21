import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingbillsComponent } from './upcomingbills.component';

describe('UpcomingbillsComponent', () => {
  let component: UpcomingbillsComponent;
  let fixture: ComponentFixture<UpcomingbillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingbillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingbillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
