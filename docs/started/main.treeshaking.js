import Vue from 'vue'
import VCurrencyField from 'v-currency-field-2'
import { VTextField } from 'vuetify/lib'  //Globally import VTextField

Vue.component('v-text-field', VTextField)
Vue.use(VCurrencyField, { 
	locale: 'pt-BR',
	decimalLength: 2,
	autoDecimalMode: true,
	min: null,
	max: null,
	defaultValue: 0,
    valueAsInteger: false,
    allowNegative: true
})
