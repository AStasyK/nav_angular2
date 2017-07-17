import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class TableData {
  public dataChange: BehaviorSubject<Object[]> = new BehaviorSubject<Object[]>([]);

  get data(): Object[] {
    return this.dataChange.value
  };

  constructor(private collection) {
    this.collection.forEach(item => {
      const copiedData = this.data.slice();
      copiedData.push(item);
      this.dataChange.next(copiedData);
    });
  }
}
