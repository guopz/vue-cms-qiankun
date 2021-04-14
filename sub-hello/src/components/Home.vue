<template>
  <div>
    home 
    <router-link to="/about">about</router-link>
    <button @click="handleClick">nihao</button>
  </div>
</template>

<script>
import actions from '../utils/actions';

export default {
  name: 'About',
  mounted() {
    actions.onGlobalStateChange(state => {
      // let { result } = state;
      // if(!result) {
      //   this.$router.push('../login');
      // }
      console.log('vue - home =>', state);
      // state.doc = 'vue - home'
    }, true)
  },
  methods: {
    handleClick() {
      actions.setGlobalState(state => {
        console.log('vue - setGlobalState =>', state);
        state.doc = 'vue - home';
      })
    }
  },
}
</script>

<style>

</style>