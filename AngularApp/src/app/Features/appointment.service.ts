import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import {} from 'rxjs';
import {Appointment} from '../Module/appointment'

@Injectable({
  providedIn: 'root'
})


export class AppointmentService {

  //List of Appointments
  AppointmentList: Appointment[]= [];
  readonly baseURL= 'http://localhost:3000/appointment'

  constructor(private http: HttpClient){}

  //addToList
  AddToList(Appoint: Appointment)
  {
    console.log("Saved Clicked");
    this.AppointmentList.push(Appoint)
    this.AppointmentList.forEach(element => {
      console.log(element)
    });
   return this.http.post(this.baseURL, Appoint)
  }
}
