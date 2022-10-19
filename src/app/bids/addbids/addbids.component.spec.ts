import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbidsComponent } from './addbids.component';

describe('AddbidsComponent', () => {
  let component: AddbidsComponent;
  let fixture: ComponentFixture<AddbidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbidsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddbidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
