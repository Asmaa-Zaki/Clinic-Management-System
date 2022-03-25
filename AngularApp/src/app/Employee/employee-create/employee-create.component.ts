import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Features/employee.service';
import { UsersService } from 'src/app/Features/users.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  constructor(public employeeService: EmployeeService, public usersSer:UsersService ,public router: Router) { }

  ngOnInit(): void {
  }

  save()
  {
    this.employeeService.AddToList().subscribe((res)=>{
      this.usersSer.AddToList().subscribe((res)=>{
        this.router.navigate(['employeeList'])
        console.log(this.employeeService.nEmployee.type)
      })
    })
  }

}
