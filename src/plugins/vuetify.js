import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'
import 'vuetify/dist/vuetify.min.css';


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.grey.darken3,
            secondary: colors.teal.accent4,
            warning: colors.red.darken1,
            anchor: colors.grey.lighten1,
          },
        },
      },
});
