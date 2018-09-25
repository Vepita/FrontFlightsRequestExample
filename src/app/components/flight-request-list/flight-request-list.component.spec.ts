import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightRequestListComponent } from './flight-request-list.component';

describe('FlightRequestListComponent', () => {
  let component: FlightRequestListComponent;
  let fixture: ComponentFixture<FlightRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
