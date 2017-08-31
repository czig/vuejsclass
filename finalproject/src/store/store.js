import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        funds: 10000,
        // number of shared in each stock owned by user
        owned: {
            bmw: 0,
            ford: 0,
            walmart: 0,
            amazon: 0
        },
        // cost of one share of each stock
        stocks: {
            bmw: 100,
            ford: 100,
            walmart: 100,
            amazon: 100
        }
    },
    getters: {
        funds: state => {
            var num = state.funds.toFixed(2);
            return '$' + num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        },
        getStockPrices: state => {
            return state.stocks;
        },
        getPortfolio: state => {
            return state.owned;
        }
    },
    mutations: {
        buyStock: (state,payload) => {
            //payload.bought contains stock being bought
            //payload.quantity gives how many shares purchased
            var costTrade = payload.quantity*state.stocks[payload.bought];
            if (state.funds == 0 || (state.funds - costTrade) < 0) {
                alert('Insufficient Funds');
                return;
            }
            else if (payload.quantity < 0) {
                alert('Invalid number');
                return;
            }
            else {
                state.funds -= state.stocks[payload.bought]*payload.quantity;
                state.owned[payload.bought] += payload.quantity;
            }
        },
        sellStock: (state,payload) => {
            //payload.sold contains stock being sold 
            //payload.quantity gives how many shares purchased
            if ( state.owned[payload.bought] <= 0 || state.owned[payload.sold] < payload.quantity) {
                alert('Insufficient shares for trade');
               return; 
            } 
            else if (payload.quantity < 0) {
                alert('Invalid number');
                return;
            } 
            else {
                state.funds += state.stocks[payload.sold]*payload.quantity;
                state.owned[payload.sold] -= payload.quantity;
            }
        },
        endDay: (state) => {
            //at end of day, randomize stock values about current point
            //only need to change state here  
            for (var stock in state.stocks) {
                var decide = (Math.round(Math.random()) == 1) ? 1 : -1;
                state.stocks[stock] += Math.round(decide*Math.random()*50) + 1;
                if (state.stocks[stock] < 0) {
                    state.stocks[stock] = 0;
                } 
            }
        }
    },
    actions: {
        buyStock: ({commit},payload) => {
            commit('buyStock',payload)
        },
        sellStock: ({commit},payload) => {
            commit('sellStock',payload)
        },
        endDay: ({commit}) => {
            commit('endDay')
        }
    }
})
