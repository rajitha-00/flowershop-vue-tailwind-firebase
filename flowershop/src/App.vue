<template>
 
  <NavBar/>
  <div class="mt-20">
    <router-view/>
  </div>
</template>

<script>

import NavBar from './components/navs/NavBar.vue';
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

