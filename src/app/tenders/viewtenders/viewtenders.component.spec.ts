import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtendersComponent } from './viewtenders.component';

describe('ViewtendersComponent', () => {
  let component: ViewtendersComponent;
  let fixture: ComponentFixture<ViewtendersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtendersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewtendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
