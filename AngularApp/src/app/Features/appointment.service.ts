import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import {Appointment} from '../Module/appointment'

@Injectable({
  providedIn: 'root'
})


export class AppointmentService {

  nAppointment: Appointment= new Appointment(0, 0 ,0 ,0 ,"")

  readonly baseURL= 'http://localhost:3000/appointment'

  constructor(private http: HttpClient){}
  AppiontList:Appointment[]=[];

  //addToList
  AddToList()
  {
    console.log("Saved Clicked");
   return this.http.post(this.baseURL, this.nAppointment)
  }

  GetList()
  {
      return this.http.get(this.baseURL)
  }

  DeleteAppoint(appoint:Appointment)
  {
    console.log(""+(this.baseURL)+`/${appoint.id}`)
      return this.http.delete(this.baseURL+'/'+this.nAppointment.id)
      
  }

  EditAppoint(appoint:Appointment)
  {
    console.log(""+(this.baseURL)+`/${appoint.id}`)
      return this.http.put(this.baseURL+`/${appoint.id}`,appoint)
      
  }
}