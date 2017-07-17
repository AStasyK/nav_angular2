import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MdPaginator } from '@angular/material';
import { MdSort } from '@angular/material';

import { Contract } from '../../../models/Contract.model';
import { ContractService } from '../../../shared/contract.service';
import { TableData } from '../../../shared/table.data';
import { TableDataSource } from '../../../shared/table.data.source';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {
  @ViewChild(MdPaginator) paginator: MdPaginator;
  @ViewChild(MdSort) sort: MdSort;
  contracts: Contract[] = [];
  tableData: TableData;
  displayedColumns = ['id', 'name', 'sq_meter_price'];
  dataSource: TableDataSource | null;
  constructor(
    private contractService: ContractService,
    private router: Router
  ) { }
  sortContracts(data, switchArg, direction) {
    return data.sort((a, b) => {
      let propertyA: number|string = '';
      let propertyB: number|string = '';
      switch (switchArg) {
        case 'id': [propertyA, propertyB] = [a.contract_id, b.contract_id]; break;
        case 'name': [propertyA, propertyB] = [a.contract_name, b.contract_name]; break;
        case 'sq_meter_price': [propertyA, propertyB] = [a.square_meter_price, b.square_meter_price]; break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (direction === 'asc' ? 1 : -1);
    });
  }
  ngOnInit() {
    this.contractService.getContracts()
      .subscribe(
        res => {
          this.contracts = res;
          if (this.contracts) {
            this.tableData = new TableData(this.contracts);
            this.dataSource = new TableDataSource(this.tableData, this.paginator, this.sort, this.sortContracts);
          }
        },
        err => console.log(err));
  }
}
