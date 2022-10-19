import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidwinnersComponent } from './bidwinners.component';

describe('BidwinnersComponent', () => {
  let component: BidwinnersComponent;
  let fixture: ComponentFixture<BidwinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidwinnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidwinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
