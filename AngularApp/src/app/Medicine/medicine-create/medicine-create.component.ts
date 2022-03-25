import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/Features/medicine.service';

@Component({
  selector: 'app-medicine-create',
  templateUrl: './medicine-create.component.html',
  styleUrls: ['./medicine-create.component.css']
})
export class MedicineCreateComponent implements OnInit {

  constructor(public medicineService: MedicineService) { }

  ngOnInit(): void {
  }

  save()
  {
    this.medicineService.AddToList().subscribe((res)=>{
      
    })
  }

}
