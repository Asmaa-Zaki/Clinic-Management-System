import { Component, OnInit } from '@angular/core';
import {Doctor} from '../../Module/doctor'
import { DoctorService } from '../../Features/doctor.service'
import { UsersService } from 'src/app/Features/users.service';

@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.css']
})
export class DoctorCreateComponent implements OnInit {
  type="doctor"
  constructor(public DoctorService:DoctorService, public userSerive: UsersService) { }

  ngOnInit(): void {
  }

  save()
  {
    this.DoctorService.AddToList().subscribe((res)=>{
      this.userSerive.nUser.type=this.type
      this.userSerive.AddToList().subscribe(()=>{})
    })
  } 

}
