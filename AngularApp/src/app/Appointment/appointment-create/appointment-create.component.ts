import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../Module/appointment'
import { AppointmentService } from '../../Features/appointment.service'

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.css']
})


export class AppointmentCreateComponent implements OnInit {

  constructor(public appointmentService: AppointmentService) { }

  ngOnInit(): void {
  }


  save() {
    this.appointmentService.AddToList().subscribe((res) => {
    })
  }
}
