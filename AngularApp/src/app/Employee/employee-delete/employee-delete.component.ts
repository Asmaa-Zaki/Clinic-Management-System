import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Features/employee.service';
import { Employee } from 'src/app/Module/employee';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {
  @Input() employee: Employee = new Employee(0, "", "", "", 0, "", "","")
  constructor(private emplService: EmployeeService) { }

  ngOnInit(): void {
  }

  DeleteEmployee()
  {
    this.emplService.DeleteEmployee().subscribe(()=>{
      
    })
  }

}
