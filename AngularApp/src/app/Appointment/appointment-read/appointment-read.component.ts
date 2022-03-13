import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Module/appointment';
import { AppointmentService } from '../../Features/appointment.service'

@Component({
  selector: 'app-appointment-read',
  templateUrl: './appointment-read.component.html',
  styleUrls: ['./appointment-read.component.css'],
})

export class AppointmentReadComponent implements OnInit {
  
  nAppointment: Appointment= new Appointment("", 0 ,0 ,0 ,"")
 
 constructor(private appointmentService: AppointmentService ) 
  {

  }

  ngOnInit(): void {
  }

  employeeForm()
  {

  }
  save()
  {
    this.appointmentService.AddToList(this.nAppointment).subscribe((res)=>{

    })
  } 

  
 //AppointList:Appointment[]=this.appointmentService.AppointmentList;
  
}
