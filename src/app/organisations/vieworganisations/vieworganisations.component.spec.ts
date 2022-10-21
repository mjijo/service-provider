import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworganisationsComponent } from './vieworganisations.component';

describe('VieworganisationsComponent', () => {
  let component: VieworganisationsComponent;
  let fixture: ComponentFixture<VieworganisationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieworganisationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VieworganisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
