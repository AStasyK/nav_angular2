import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MdPaginator } from '@angular/material';
import { MdSort } from '@angular/material';

import { Employee } from '../../../models/Employee.model';
import { EmployeeService } from '../../../shared/employee.service';
import { TableData } from '../../../shared/table.data';
import { TableDataSource } from '../../../shared/table.data.source';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  @ViewChild(MdPaginator) paginator: MdPaginator;
  @ViewChild(MdSort) sort: MdSort;
  employees: Employee[] = [];
  tableData: TableData;
  displayedColumns = ['id', 'name', 'birthDate', 'city', 'phoneNumber', 'status', 'coord'];
  dataSource: TableDataSource | null;
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  sortEmployees(data, switchArg, direction) {
    return data.sort((a, b) => {
      let propertyA: number|string = '';
      let propertyB: number|string = '';
      switch (switchArg) {
        case 'id': [propertyA, propertyB] = [a.employee_id, b.employee_id]; break;
        case 'name': [propertyA, propertyB] = [a.employee_surname, b.employee_surname]; break;
        case 'birthDate': [propertyA, propertyB] = [a.birth_date, b.birth_date]; break;
        case 'city': [propertyA, propertyB] = [a.city.city_id, b.city.city_id]; break;
        case 'phoneNumber': [propertyA, propertyB] = [a.phone_num, b.phone_num]; break;
        case 'status': [propertyA, propertyB] = [a.employee_active, b.employee_active]; break;
        case 'coord': [propertyA, propertyB] = [a.coord.coord_addr, b.coord.coord_addr]; break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (direction === 'asc' ? 1 : -1);
    });
  }
  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe(
        res => {
          this.employees = res;
          if (this.employees) {
            this.tableData = new TableData(this.employees);
            this.dataSource = new TableDataSource(this.tableData, this.paginator, this.sort, this.sortEmployees);
          }
        },
        err => console.log(err));
  }

}

