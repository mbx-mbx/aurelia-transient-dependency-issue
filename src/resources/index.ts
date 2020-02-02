import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-framework';

const components = [
  PLATFORM.moduleName('./elements/test-element')
];

export function configure(config: FrameworkConfiguration) {
  config.globalResources([...components]);
}
