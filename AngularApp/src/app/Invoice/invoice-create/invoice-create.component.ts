import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/Features/invoice.service';
@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.css']
})
export class InvoiceCreateComponent implements OnInit {

  constructor(public InvoiceService: InvoiceService) { }

  ngOnInit(): void {
  }

  save() {
    this.InvoiceService.AddToList().subscribe((res) => {

    })
  }
}
