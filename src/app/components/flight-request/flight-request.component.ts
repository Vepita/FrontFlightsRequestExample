import { Component, OnInit } from '@angular/core';
import { FlightRequest } from '../../domains/flight-request';
import { FlightsManagementService } from '../../services/flights-management.service';
import { Destination } from '../../domains/destination';

@Component({
  selector: 'app-flight-request',
  templateUrl: './flight-request.component.html',
  styleUrls: ['./flight-request.component.css'],
  providers: [FlightsManagementService]
})
export class FlightRequestComponent implements OnInit {

  flighRequest: FlightRequest;
  showError: boolean = false;
  destinationsList: Destination[];
  infoMessage: string;
  showInfoMessage: boolean = false;

  constructor(public flightManagementService: FlightsManagementService) { }

  ngOnInit() {
    this.flighRequest = new FlightRequest();
    this.getDestinations();
  }

  getDestinations() {
    this.flightManagementService.getAllDestinations().subscribe(
      res => {
        if (res.error) {
          this.showError = true;
          return;
        }
        this.destinationsList = res.response;
      },
      err => {
        this.showError = true;
      });
  }

  cleanFlightRequest() {
    this.flighRequest = new FlightRequest();
  }

  onSaveFlightRequest() {
    this.flighRequest.status = 'NEW';
    this.flighRequest.requestDate = new Date();
    this.saveFlightRequest();
  }


  saveFlightRequest() {
    this.flightManagementService.saveFlightRequest(this.flighRequest).subscribe(
      res => {

        if (res.error) {
          this.showError = true;
          this.cleanFlightRequest();
          return;
        }
        this.showInfoMessage = true;
        this.infoMessage = 'Succes, the flight request has been stored ';
        this.cleanFlightRequest();
      },
      err => {
        this.showError = true;
        this.cleanFlightRequest();
      }
    );

  }

}
