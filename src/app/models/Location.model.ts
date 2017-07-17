import { Contract } from './Contract.model';

export class Location {
  public location_id: number;
  public location_name: string;
  public square: number;
  public contract: Contract;
}
