// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                colors: {
                    primary: '#1867c0',
                    secondary: '#5cbbf6'
                }
            }
        }
    },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
