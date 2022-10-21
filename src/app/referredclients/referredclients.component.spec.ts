import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferredclientsComponent } from './referredclients.component';

describe('ReferredclientsComponent', () => {
  let component: ReferredclientsComponent;
  let fixture: ComponentFixture<ReferredclientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferredclientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferredclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
