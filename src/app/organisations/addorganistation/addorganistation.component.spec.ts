import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorganistationComponent } from './addorganistation.component';

describe('AddorganistationComponent', () => {
  let component: AddorganistationComponent;
  let fixture: ComponentFixture<AddorganistationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddorganistationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddorganistationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
