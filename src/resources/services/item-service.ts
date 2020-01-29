import { transient } from "aurelia-framework";

@transient()
export class ItemService {
  constructor() {
  }

  getItems(): void {
    console.log('real item service');
  }
}
