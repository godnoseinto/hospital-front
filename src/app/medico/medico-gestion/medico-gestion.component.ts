import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicoService } from '@godnoseinto/hospital-api/src/app/api/services/medico.service'

export interface PeriodicElement {
  id: number;
  name: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { id: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { id: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-medico-gestion',
  templateUrl: './medico-gestion.component.html',
  styleUrls: ['./medico-gestion.component.scss']
})
export class MedicoGestionComponent implements OnInit {

  displayedColumns: string[] = ['name', 'weight', 'symbol', 'acciones'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router,
    private medico: MedicoService) { }

  ngOnInit(): void {
  }

  goToEditMedico(idMedico: number) {
    this.router.navigateByUrl(`/medico/${idMedico}/editar`);
  }

  goToAsignarHospital(idMedico: number) {
    this.medico.medicoIdMedicoGet({
      idMedico: 1
    });
    this.router.navigateByUrl(`/medico/${idMedico}/asignar-hospital`);
  }
}
