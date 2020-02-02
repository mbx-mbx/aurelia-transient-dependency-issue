import {Guid} from "guid-typescript";

export class MockItemService{
  id = Guid.create();

  getItems():void {
    console.log('mock item service');
  }
}
