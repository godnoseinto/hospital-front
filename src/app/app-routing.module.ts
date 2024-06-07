import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'hospital',
    loadChildren: () => import('./hospital/hospital.module')
      .then(m => m.HospitalModule),
  },
  {
    path: 'medico',
    loadChildren: () => import('./medico/medico.module')
      .then(m => m.MedicoModule),
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      useHash:false,enableTracing:true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
