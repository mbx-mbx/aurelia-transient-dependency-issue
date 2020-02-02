import {Guid} from "guid-typescript";

export class ItemService {
  id = 'REAL-' + Guid.create()

  constructor() {
  }

  getItems(): void {
    console.log('real item service');
  }
}
