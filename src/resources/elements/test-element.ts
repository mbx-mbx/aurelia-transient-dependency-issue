import { autoinject } from "aurelia-dependency-injection";

import {ItemService} from "../services/item-service";

@autoinject()
export class TestElement {
  constructor(private _itemService: ItemService) {

  }

  attached(): void {
    this._itemService.getItems();
  }
}
