import {Guid} from "guid-typescript";

export class ItemService {
  id: string;

  constructor() {
    this.id = 'REAL-' + Guid.create();
  }

  getItems(): void {
    console.log('real item service');
  }
}
