import { transient } from "aurelia-dependency-injection";

@transient()
export class MockItemService{
  getItems():void {
    console.log('mock item service');
  }
}
