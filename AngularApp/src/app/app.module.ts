import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router'
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
import { MedicineCreateComponent } from './Medicine/medicine-create/medicine-create.component';
import { MedicineDeleteComponent } from './Medicine/medicine-delete/medicine-delete.component';
import { MedicineUpdateComponent } from './Medicine/medicine-update/medicine-update.component';
import { MedicineReadComponent } from './Medicine/medicine-read/medicine-read.component';
import { MedicineService } from './Features/medicine.service';
import { SortComponentPipe } from './pipes/sort-Component.pipe';
import { FilterMedicineNamePipe } from './pipes/filter-medicine-name.pipe';
import { EmployeeCreateComponent } from './Employee/employee-create/employee-create.component';
import { EmployeeDeleteComponent } from './Employee/employee-delete/employee-delete.component';
import { EmployeeReadComponent } from './Employee/employee-read/employee-read.component';
import { EmployeeUpdateComponent } from './Employee/employee-update/employee-update.component';
import { FilterEmployeeNamePipe } from './pipes/filter-employee-name.pipe';
import { HomeComponent } from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import { ErrorComponent } from './error/error.component'
const routes: Routes= [
  {path:"home", component:HomeComponent},
  {path:"employee", component:EmployeeCreateComponent},
  {path:"", redirectTo:"/home",pathMatch:"full"},
  {path:"employeeList", component:EmployeeReadComponent},
  {path:"**", component:ErrorComponent}, //must be the last
]

@NgModule({
  declarations: [
    AppComponent,
    AppointmentCreateComponent,
    AppointmentReadComponent,
    AppointmentUpdateComponent,
    AppointmentDeleteComponent,
    FilterbySpecialityPipe,
    MedicineCreateComponent,
    MedicineDeleteComponent,
    MedicineUpdateComponent,
    MedicineReadComponent,
    SortComponentPipe,
    FilterMedicineNamePipe,
    EmployeeCreateComponent,
    EmployeeDeleteComponent,
    EmployeeReadComponent,
    EmployeeUpdateComponent,
    FilterEmployeeNamePipe,
    HomeComponent,
    NavbarComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppointmentService, MedicineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
