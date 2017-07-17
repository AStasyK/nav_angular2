import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk';
import { MdPaginator } from '@angular/material';
import { MdSort } from '@angular/material';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { TableData } from './table.data';
export class TableDataSource extends DataSource<any> {

  constructor(private tableData: TableData, private _paginator: MdPaginator, private _sort: MdSort, private customSort) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Object[]> {

    const displayDataChanges = [
      this.tableData.dataChange,
      this._paginator.page,
      this._sort.mdSortChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const sortedData = this.getSortedData();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return sortedData.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {}

  /** Returns a sorted copy of the database data. */
  getSortedData(): Object[] {
    const data = this.tableData.data.slice();
    if (!this._sort.active || this._sort.direction === '') { return data; }
    return this.customSort(data, this._sort.active, this._sort.direction);
  }
}
