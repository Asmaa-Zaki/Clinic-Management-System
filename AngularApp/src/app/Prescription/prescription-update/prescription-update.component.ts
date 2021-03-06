import { Component, OnInit, Input } from '@angular/core';
import { Prescription } from './../../Module/prescription';
import { PrescriptionService } from './../../Features/prescription.service';

@Component({
  selector: 'app-prescription-update',
  templateUrl: './prescription-update.component.html',
  styleUrls: ['./prescription-update.component.css']
})
export class PrescriptionUpdateComponent implements OnInit {
  @Input() prescription: Prescription = new Prescription(0, 0, 0, 0, "", new Date('M/d/yy, h:mm a'))

  constructor(private prescriptionService: PrescriptionService) { }

  ngOnInit(): void {
  }
  EditPrescript() {
    console.log(this.prescription)
    this.prescriptionService.nPrescription = this.prescription
  }

  SavePrescript() {
    this.prescriptionService.Editprescript(this.prescriptionService.nPrescription).subscribe((res) => {

    })
  }
}
