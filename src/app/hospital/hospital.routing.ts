import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionHospitalComponent } from './gestion-hospital/gestion-hospital.component';
import { RegistrarHospitalComponent } from './registrar-hospital/registrar-hospital.component';
import { EditarHospitalComponent } from './editar-hospital/editar-hospital.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'gestion',
        pathMatch: 'full'
    },
    { path: 'gestion', component: GestionHospitalComponent },
    { path: 'registrar', component: RegistrarHospitalComponent },
    { path: ':id/editar', component: EditarHospitalComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HospitalRoutingModule { }