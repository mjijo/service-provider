import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtenderComponent } from './addtender.component';

describe('AddtenderComponent', () => {
  let component: AddtenderComponent;
  let fixture: ComponentFixture<AddtenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
