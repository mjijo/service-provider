import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionWinnersComponent } from './auction-winners.component';

describe('AuctionWinnersComponent', () => {
  let component: AuctionWinnersComponent;
  let fixture: ComponentFixture<AuctionWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionWinnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuctionWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
