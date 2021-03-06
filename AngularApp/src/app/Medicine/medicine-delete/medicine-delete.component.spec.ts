import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineDeleteComponent } from './medicine-delete.component';

describe('MedicineDeleteComponent', () => {
  let component: MedicineDeleteComponent;
  let fixture: ComponentFixture<MedicineDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
