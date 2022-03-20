import { Component, OnInit } from '@angular/core';
import { Prescription } from './../../Module/prescription';
import { PrescriptionService } from './../../Features/prescription.service';

@Component({
  selector: 'app-prescription-create',
  templateUrl: './prescription-create.component.html',
  styleUrls: ['./prescription-create.component.css']
})
export class PrescriptionCreateComponent implements OnInit {

  constructor(public prescriptionService: PrescriptionService) { }

  ngOnInit(): void {
  }
  save() {
    this.prescriptionService.AddToList().subscribe((res) => {

    })
  }
}
