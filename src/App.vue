<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Backstage from "./components/Backstage.vue";
import Login from "./components/Login.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  components: { Backstage, Login },
  computed: {
    ...mapState(["isLogin"]),
  },
};
</script>



