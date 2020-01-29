import {TestElement} from "../../src/resources/elements/test-element";
import {ComponentTester, StageComponent} from "aurelia-testing";
import {ItemService} from "../../src/resources/services/item-service";
import {MockItemService} from "./mock-item-service";
import {bootstrap} from "aurelia-bootstrapper";

describe('test element', () => {
  let testElement;
  const path: string = '../../src/resources/elements/test-element';

  beforeEach(() => {
    testElement = StageComponent.withResources(path).inView(`<test-element></test-element>`);

    testElement.bootstrap(aurelia => {
      aurelia.use.standardConfiguration();
      aurelia.container.registerTransient(ItemService, MockItemService);
    });
  });

  afterEach(() => {
    testElement.dispose();
  });

  it('should call mock item service', async() => {
    await testElement.create(bootstrap);
    expect(testElement).toBeTruthy();
  })
});
