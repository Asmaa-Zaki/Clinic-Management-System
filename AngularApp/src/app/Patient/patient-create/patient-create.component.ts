import { Component, OnInit } from '@angular/core';
import {Patient} from '../../Module/patient'
import { PatientService } from '../../Features/patient.service'

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {

  constructor(public PatientService: PatientService) { }

  ngOnInit(): void {
  }

  save()
  {
    this.PatientService.AddToList().subscribe((res)=>{
    })
  } 
}
