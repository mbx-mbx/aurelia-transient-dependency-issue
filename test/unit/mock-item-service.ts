import {Guid} from "guid-typescript";

export class MockItemService{
  id: string;

  constructor() {
    this.id = 'MOCK-' +  Guid.create();
  }

  getItems():void {
    console.log('mock item service');
  }
}
