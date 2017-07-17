import { City } from './City.model';
import { Group } from './Group.model';

export class Employee {
  public employee_id: number;
  public employee_name: string;
  public employee_surname: string;
  public birth_date: Date;
  public city: City;
  public phone_num: string;
  public employee_active: number;
  public group: Group;
  public coord: any;
}
