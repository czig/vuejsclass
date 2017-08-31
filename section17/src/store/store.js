import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter.js'
import * as actions from './actions.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters: {
        value: state => {
            return state.value;
        }
    },
    mutations: {
        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    actions,
    modules: {
        counter: counter //could just be counter
    }
});

