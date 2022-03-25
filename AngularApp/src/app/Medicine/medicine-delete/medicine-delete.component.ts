import { Component, Input, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/Features/medicine.service';
import { Medicine } from 'src/app/Module/medicine';

@Component({
  selector: 'app-medicine-delete',
  templateUrl: './medicine-delete.component.html',
  styleUrls: ['./medicine-delete.component.css']
})
export class MedicineDeleteComponent implements OnInit {
  @Input() medicine: Medicine= new Medicine(0, "","","")

  constructor(private medService: MedicineService) { }

  ngOnInit(): void {
  }

  DeleteMedicine()
  {
    this.medService.DeleteMedicine().subscribe((res)=>{
      
    })
  }

}
