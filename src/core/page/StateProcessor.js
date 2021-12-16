import { throttle } from '@core/utils';


export class StateProcessor {
  constructor(client) {
    this.client = client;
    this.listen = this.listen.bind(this);

    // Сохраняем в localStorage только после 300 мс с момента
    // последнего изменения state
    this.listen = throttle(this.listen, 300);
  }

  listen(state) {
      this.client.save(state);
  }

  get() {
    return this.client.get();
  }

}
