import { autoinject } from "aurelia-dependency-injection";

import {ItemService} from "../services/item-service";

@autoinject()
export class TestElement {
  constructor(private _itemService: ItemService, private _itemService2: ItemService) {

  }

  attached(): void {
    console.log(this._itemService.id);
    console.log(this._itemService2.id);
    this._itemService.getItems();
  }
}
