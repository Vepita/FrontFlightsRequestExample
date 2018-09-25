import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RestResponse } from '../domains/rest-response';
import { FrontAppRequestOptions } from '../security/front-app-request-options';
import { FlightRequest } from '../domains/flight-request';

@Injectable()
export class FlightsManagementService {

  private commentsUrl = environment.baseUrlPath;

  constructor(private http: Http) { }

  getAllDestinations(): Observable<RestResponse> {
    let options = new FrontAppRequestOptions();
    return this.http.get(environment.baseUrlPath + 'flights/getAllDestinations', options).map(res => {
      return res.json();
    });
  }

  saveFlightRequest(flightRequest: FlightRequest): Observable<RestResponse> {
    let options = new FrontAppRequestOptions();
    return this.http.put(environment.baseUrlPath + 'flights/saveFlightRequest', flightRequest, options).map(res => {
      return res.json();
    });
  }

  getFlightsRequestByStatus(status: string): Observable<RestResponse> {
    let options = new FrontAppRequestOptions();
    return this.http.get(environment.baseUrlPath + 'flights/getFlightRequestByStatus/'+ status, options).map(res => {
      return res.json();
    });
  }

}
