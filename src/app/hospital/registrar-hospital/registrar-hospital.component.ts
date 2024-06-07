import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-registrar-hospital',
  templateUrl: './registrar-hospital.component.html',
  styleUrls: ['./registrar-hospital.component.scss']
})
export class RegistrarHospitalComponent implements OnInit {

  public registrarHospitalGroup: UntypedFormGroup;

  constructor() { 
    this.registrarHospitalGroup = new UntypedFormGroup({
      nombre: new UntypedFormControl('', [])
    });
  }

  ngOnInit(): void {
   
  }

  createHospital(){
    console.log("crear hospital")
    const nombre: string = this.registrarHospitalGroup.value;
    console.log(nombre)
  }

}
