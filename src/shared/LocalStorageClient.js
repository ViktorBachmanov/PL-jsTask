import { storage } from '@core/utils';
import { throttle } from '@core/utils';

function storageName(param) {
  return 'excel:' + param;
}

export class LocalStorageClient {
  constructor(name) {
    this.name = storageName(name);

    this.save = throttle(this.save, 300);
  }

  save(state) {
    storage(this.name, state);
    return Promise.resolve();
  }

  get() {
    return new Promise((resolve) => {
      const state = storage(this.name);

      setTimeout(() => {
        resolve(state);
      }, 2500);
    });
  }
}
