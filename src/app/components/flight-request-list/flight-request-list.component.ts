import { Component, OnInit } from '@angular/core';
import { FlightRequest } from '../../domains/flight-request';
import { FlightsManagementService } from '../../services/flights-management.service';

@Component({
  selector: 'app-flight-request-list',
  templateUrl: './flight-request-list.component.html',
  styleUrls: ['./flight-request-list.component.css'],
  providers: [FlightsManagementService]
})
export class FlightRequestListComponent implements OnInit {

  flightsRequests: FlightRequest[];
  showError: boolean = false;
  infoMessage: string;
  showInfoMessage: boolean = false;

  constructor(public flightManagementService: FlightsManagementService) { }

  ngOnInit() {
    this.getFlightsRequest();
  }

  getFlightsRequest() {
    this.flightManagementService.getFlightsRequestByStatus('NEW').subscribe(
      res => {
        if (res.error) {
          this.showError = true;
          return;
        }
        this.flightsRequests = res.response;
      },
      err => {
        this.showError = true;
      });
  }

  onBook(flight: FlightRequest) {
    this.saveFlightRequest(flight);
  }

  saveFlightRequest(flighRequest: FlightRequest) {
    flighRequest.status = 'BOOKED'
    flighRequest.requestDate = new Date();

    this.flightManagementService.saveFlightRequest(flighRequest).subscribe(
      res => {

        if (res.error) {
          this.showError = true;
          return;
        }
        this.infoMessage = 'Succes, the flight request has been stored ';
        this.showInfoMessage = true;
      },
      err => {
        this.showError = true;
      }
    );

  }

}
