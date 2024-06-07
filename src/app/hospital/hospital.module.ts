import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { GestionHospitalComponent } from './gestion-hospital/gestion-hospital.component';
import { RegistrarHospitalComponent } from './registrar-hospital/registrar-hospital.component';
import { EditarHospitalComponent } from './editar-hospital/editar-hospital.component';
import { MatButtonModule } from '@angular/material/button';
import { HospitalRoutingModule } from './hospital.routing';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GestionHospitalComponent,
    RegistrarHospitalComponent,
    EditarHospitalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    HospitalRoutingModule,
    ReactiveFormsModule
  ]
})
export class HospitalModule { }
