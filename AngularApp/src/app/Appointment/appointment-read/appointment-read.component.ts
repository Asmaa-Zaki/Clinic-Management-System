import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Module/appointment';
import { AppointmentService } from '../../Features/appointment.service'

@Component({
  selector: 'app-appointment-read',
  templateUrl: './appointment-read.component.html',
  styleUrls: ['./appointment-read.component.css'],
})

export class AppointmentReadComponent implements OnInit {
  
  AppointmentList: Appointment[]= []
  
 constructor(public appointmentService: AppointmentService ) 
  {

  }

  ngOnInit(): void {
    this.show()
  } 

  show()
  {
    this.appointmentService.GetList().subscribe((res)=>
    {
      this.appointmentService.AppiontList= res as Appointment[];
      this.AppointmentList= this.appointmentService.AppiontList;
      //for test
      this.AppointmentList.forEach(element => {
        console.log(element)
      });
    })
  }
  //AppointmentList:Appointment[]=this.appointmentService.AppointmentList

}

