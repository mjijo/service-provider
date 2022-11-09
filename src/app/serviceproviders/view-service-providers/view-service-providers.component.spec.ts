import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewServiceProvidersComponent } from './view-service-providers.component';

describe('ViewServiceProvidersComponent', () => {
  let component: ViewServiceProvidersComponent;
  let fixture: ComponentFixture<ViewServiceProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewServiceProvidersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewServiceProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
