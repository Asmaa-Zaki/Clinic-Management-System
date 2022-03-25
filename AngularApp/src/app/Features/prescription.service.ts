import { Injectable } from '@angular/core';
import { Prescription } from './../Module/prescription';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  nPrescription: Prescription = new Prescription(0, 0, 0, 0, "", new Date('M/d/yy, h:mm a'));
  readonly baseURL = 'http://localhost:3000/prescript'

  constructor(private http: HttpClient) { }
  PrescriptList: Prescription[] = [];
  AddToList() {
    console.log(this.nPrescription);
    return this.http.post(this.baseURL, this.nPrescription)
  }

  GetList() {
    return this.http.get(this.baseURL)
  }

  Deleteprescript() {
    console.log("" + (this.baseURL) + `/${this.nPrescription._id}`)
    return this.http.delete(this.baseURL + '/' + this.nPrescription._id)

  }

  Editprescript(prescript: Prescription) {
    console.log("" + (this.baseURL) + `/${prescript._id}`)
    return this.http.put(this.baseURL + `/${prescript._id}`, prescript)

  }
}
