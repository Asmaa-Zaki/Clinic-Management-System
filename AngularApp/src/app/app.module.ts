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
import { MedicineCreateComponent } from './Medicine/medicine-create/medicine-create.component';
import { MedicineDeleteComponent } from './Medicine/medicine-delete/medicine-delete.component';
import { InvoiceCreateComponent } from './Invoice/invoice-create/invoice-create.component';
import { InvoiceUpdateComponent } from './Invoice/invoice-update/invoice-update.component';
import { InvoiceDeleteComponent } from './Invoice/invoice-delete/invoice-delete.component';
import { InvoiceReadComponent } from './Invoice/invoice-read/invoice-read.component';
import { PrescriptionCreateComponent } from './Prescription/prescription-create/prescription-create.component';
import { PrescriptionDeleteComponent } from './Prescription/prescription-delete/prescription-delete.component';
import { PrescriptionUpdateComponent } from './Prescription/prescription-update/prescription-update.component';
import { PrescriptionReadComponent } from './Prescription/prescription-read/prescription-read.component';
import { FilterbyPrescriptPipe } from './pipes/filterby-prescript.pipe';
import { SortPrescriptPipe } from './pipes/sort-prescript.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AppointmentCreateComponent,
    AppointmentReadComponent,
    AppointmentUpdateComponent,
    AppointmentDeleteComponent,
    FilterbySpecialityPipe,
    SortAppointmentPipe,
    MedicineCreateComponent,
    MedicineDeleteComponent,
    InvoiceCreateComponent,
    InvoiceUpdateComponent,
    InvoiceDeleteComponent,
    InvoiceReadComponent,
    PrescriptionCreateComponent,
    PrescriptionDeleteComponent,
    PrescriptionUpdateComponent,
    PrescriptionReadComponent,
    FilterbyPrescriptPipe,
    SortPrescriptPipe,


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
