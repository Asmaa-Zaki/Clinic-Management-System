import { Component, OnInit } from '@angular/core';
import { ClinicServService } from 'src/app/Features/clinic-serv.service';

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.css']
})
export class ServiceCreateComponent implements OnInit {

  constructor(public clinicSerService: ClinicServService) { }

  ngOnInit(): void {
  }

  save()
  {
    this.clinicSerService.AddToList().subscribe((res)=>{
      
    })
  }
}
