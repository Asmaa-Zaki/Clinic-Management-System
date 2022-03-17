import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentCreateComponent } from './Appointment/appointment-create/appointment-create.component';
import { AppointmentReadComponent } from './Appointment/appointment-read/appointment-read.component';
import { AppointmentUpdateComponent } from './Appointment/appointment-update/appointment-update.component';
import { AppointmentDeleteComponent } from './Appointment/appointment-delete/appointment-delete.component';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from './Features/appointment.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterbySpecialityPipe } from './pipes/filterby-speciality.pipe';
import { SortAppointmentPipe } from './pipes/sort-appointment.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AppointmentCreateComponent,
    AppointmentReadComponent,
    AppointmentUpdateComponent,
    AppointmentDeleteComponent,
    FilterbySpecialityPipe,
    SortAppointmentPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
