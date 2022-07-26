import Vue from 'vue';
import VCurrencyField from 'v-currency-field-2';
import { VTextField } from 'vuetify/lib'  //Globally import VTextField

Vue.component('v-text-field', VTextField)
Vue.use(VCurrencyField, <%= serialize(options) %>);
