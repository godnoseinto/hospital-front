import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicoGestionComponent } from './medico-gestion/medico-gestion.component';
import { MedicoRegistrarComponent } from './medico-registrar/medico-registrar.component';
import { MedicoEditarComponent } from './medico-editar/medico-editar.component';
import { AsignarHospitalComponent } from './asignar-hospital/asignar-hospital.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'gestion',
        pathMatch: 'full'
    },
    { path: 'gestion', component: MedicoGestionComponent },
    { path: 'registrar', component: MedicoRegistrarComponent },
    { path: ':id/editar', component: MedicoEditarComponent },
    { path: ':id/asignar-hospital', component: AsignarHospitalComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MedicoRoutingModule { }