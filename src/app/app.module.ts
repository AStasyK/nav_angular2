import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './components/custom-material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';

import { EmployeesComponent } from './components/content/employees/employees.component';
import { OfficesComponent } from './components/content/offices/offices.component';
import { ContractsComponent } from './components/content/contracts/contracts.component';

import { SidenavService } from './components/sidenav/sidenav.service';
import { EmployeeService } from './shared/employee.service';
import { ContractService } from './shared/contract.service';
import { OfficeService } from './shared/office.service';

import { AppRoutingModule } from './app.routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    EmployeesComponent,
    OfficesComponent,
    ContractsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [SidenavService, EmployeeService, ContractService, OfficeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
