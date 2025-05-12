import { defineComponent } from 'vue';
import style from './user-card.css' with { type: 'css' };

document.adoptedStyleSheets.push(style);

export interface User {
  name: string;
  age: number;
}

export default defineComponent({
  props: {
    user: { 
      type: Object as () => User,
      required: true
    }
  },
  template: `<div class="user-card">{{ user.name }}<span class="age"> ({{ user.age }})</span></div>`
});
