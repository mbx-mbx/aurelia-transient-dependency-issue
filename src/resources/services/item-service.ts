import {Guid} from "guid-typescript";

export class ItemService {
  id = Guid.create();

  constructor() {
  }

  getItems(): void {
    console.log('real item service');
  }
}
