 export const state = {
    counter: 0  
 };

export const getters = {
    doubleCounter(state) {
        return state.counter * 2;
    },
    stringCounter: state => {
        return state.counter + ' Clicks';
    }
};

export const mutations = {
    increment(state, payload) {
        state.counter += payload;
    },
    decrement: (state, payload) => {
        state.counter -= payload;
    }
};

export const actions = {
    increment: ({ commit }, payload) => {
        commit('increment', payload);
    },
    decrement: ({ commit }, payload) => {
        commit('decrement', payload);
    },
    asyncIncrement: ({commit}, payload) => {
        setTimeout(() => {
            commit('increment',payload.by);
        }, payload.duration);
    },
    asyncDecrement: ({commit}, payload) => {
        setTimeout(() => {
            commit('decrement',payload.by);
        }, payload.duration);
    }
};

export default {
    state: state,
    getters: getters,
    mutations: mutations,
    actions
}
