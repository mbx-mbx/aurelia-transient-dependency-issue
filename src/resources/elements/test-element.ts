import {ItemService} from "../services/item-service";
import { autoinject } from "aurelia-dependency-injection";

@autoinject()
export class TestElement {
  constructor(private _itemService: ItemService) {

  }

  attached(): void {
    this._itemService.getItems();
  }
}
