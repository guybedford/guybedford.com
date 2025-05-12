import { createApp } from 'vue';
import UserCard, { type User } from './user-card.ts';

let app;
export function initApp () {
  app = createApp({
    setup() {
      const users: User[] = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 }
      ];
      return { users };
    },
    template: `<user-card v-for="user in users" :key="user.name" :user="user" />`
  });
  app.component('user-card', UserCard);
  return app;
}

if (!import.meta.hot?.data?.loaded) {
  app = initApp();
  app.mount('#app');
}

if (import.meta.hot) {
  import.meta.hot.data.loaded = true;
  import.meta.hot.accept((newApp) => {
    app.unmount();
    app = newApp.initApp();
    app.mount('#app');
  });
}
