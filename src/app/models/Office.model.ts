import { City } from './City.model';

export class Office {
  public office_id: number;
  public office_name: string;
  public address: string;
  public city: City;
  public city_id: number;
  public floors: any
}
