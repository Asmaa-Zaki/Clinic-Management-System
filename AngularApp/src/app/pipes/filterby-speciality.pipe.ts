import { Pipe, PipeTransform } from '@angular/core';
import { AppointmentService } from '../Features/appointment.service';

@Pipe({
  name: 'filterbySpeciality'
})
export class FilterbySpecialityPipe implements PipeTransform {

  transform(appointList: Array<any>, search?: string): any {
    if (appointList && search)
    {
     if(search)
      return appointList.filter((appoint)=>
      {
        return appoint.medicalSpecialty == search
      })
    }
    return appointList;
  }

}
