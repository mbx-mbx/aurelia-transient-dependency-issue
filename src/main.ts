import {Aurelia} from 'aurelia-framework'
import * as environment from '../config/environment.json';
import {PLATFORM} from 'aurelia-pal';
import {ItemService} from "./resources/services/item-service";

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => {
      aurelia.container.registerTransient(ItemService, ItemService);
      aurelia.setRoot(PLATFORM.moduleName('app'));
    }
  );
}
