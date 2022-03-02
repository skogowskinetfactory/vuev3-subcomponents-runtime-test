import { defineComponent } from 'vue';
import SubComponent from './components/SubComponent';

export default defineComponent({
  name: 'App',
  data: () => {
    return {
      testPropertyA: 'testPropertyA contents',
    };
  },
  components: {
    subComponent: SubComponent,
  },
});
