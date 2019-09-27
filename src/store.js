import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter : 0

  },
  getters: {
    displayCounter : state => {
      return state.counter*2;
    }
  },
  mutations: {
    increment : state => {
      state.counter ++;
    },
    decrement : state => {
      state.counter --;
    },

  },
  actions: {
    increment : context => {
      context.commit('increment');
    },
    decrement : context => {
      context.commit('decrement')
    },
    asyncIncrement : context => {
      setTimeout(() =>{
        context.commit('increment')
      },2000);
    },
    asyncDecrement : context => {
      setTimeout(() =>{
        context.commit('decrement')
      },2000);
    }

  }
})
