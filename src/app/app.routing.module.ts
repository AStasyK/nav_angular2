import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent } from './components/content/employees/employees.component';
import { OfficesComponent } from './components/content/offices/offices.component';
import { ContractsComponent } from './components/content/contracts/contracts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'offices', component: OfficesComponent},
  {path: 'contracts', component: ContractsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
