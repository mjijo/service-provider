import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewservicesComponent } from './viewservices.component';

describe('ViewservicesComponent', () => {
  let component: ViewservicesComponent;
  let fixture: ComponentFixture<ViewservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
