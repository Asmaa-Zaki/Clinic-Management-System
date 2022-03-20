import { Component, OnInit } from '@angular/core';
import {Doctor} from '../../Module/doctor'
import { DoctorService } from '../../Features/doctor.service'

@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.css']
})
export class DoctorCreateComponent implements OnInit {

  constructor(public DoctorService:DoctorService) { }

  ngOnInit(): void {
  }

  save()
  {
    this.DoctorService.AddToList().subscribe((res)=>{
    })
  } 

}
