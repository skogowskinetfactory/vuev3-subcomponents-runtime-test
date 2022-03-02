import { defineComponent } from 'vue';

export default defineComponent({
  name: 'subComponent',
  data: () => {
    return {
      testPropertySub: 'testPropertySub contents',
    };
  },
});
