import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicoGestionComponent } from './medico-gestion/medico-gestion.component';
import { MedicoRegistrarComponent } from './medico-registrar/medico-registrar.component';
import { MedicoEditarComponent } from './medico-editar/medico-editar.component';
import { MedicoRoutingModule } from './medico.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AsignarHospitalComponent } from './asignar-hospital/asignar-hospital.component';



@NgModule({
  declarations: [
    MedicoGestionComponent,
    MedicoRegistrarComponent,
    MedicoEditarComponent,
    AsignarHospitalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MedicoRoutingModule
  ]
})
export class MedicoModule { }
