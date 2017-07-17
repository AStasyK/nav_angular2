import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MdPaginator } from '@angular/material';
import { MdSort } from '@angular/material';


import { Office } from '../../../models/Office.model'
import { OfficeService } from '../../../shared/office.service';
import { TableData } from '../../../shared/table.data';
import { TableDataSource } from '../../../shared/table.data.source';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss']
})
export class OfficesComponent implements OnInit {
  @ViewChild(MdPaginator) paginator: MdPaginator;
  @ViewChild(MdSort) sort: MdSort;
  offices: Office[] = [];
  tableData: TableData;
  displayedColumns = ['id', 'name', 'address', 'city'];
  dataSource: TableDataSource | null;

  constructor(
    private officeService: OfficeService,
    private router: Router
  ) { }
  sortOffices(data, switchArg, direction) {
    return data.sort((a, b) => {
      let propertyA: number|string = '';
      let propertyB: number|string = '';
      switch (switchArg) {
        case 'id': [propertyA, propertyB] = [a.office_id, b.office_id]; break;
        case 'name': [propertyA, propertyB] = [a.office_name, b.office_name]; break;
        case 'address': [propertyA, propertyB] = [a.address, b.address]; break;
        case 'city': [propertyA, propertyB] = [a.city.city_id, b.city.city_id]; break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (direction === 'asc' ? 1 : -1);
    });
  }
  ngOnInit() {
    this.officeService.getOffices()
      .subscribe(
        res => {
          this.offices = res;
          if (this.offices) {
            this.tableData = new TableData(this.offices);
            this.dataSource = new TableDataSource(this.tableData, this.paginator, this.sort, this.sortOffices);
          }
        },
        err => console.log(err)
      );
  }
}

