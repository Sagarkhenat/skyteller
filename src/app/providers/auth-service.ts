/*--------------------Ionic components---------------*/
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '@angular/router';

/*-----------------Providers---------------------*/


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor( ){

  }

  //Add authorisation service methods here
  /**
   * Function to perform post call
   * @param: data
   */
  post( path: any, data?: any, skipAuth?: boolean ): Observable<any> {
    return();
  }
}
