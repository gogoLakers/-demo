<template>
  <div>
    <MyHeader />
    <SideBar />
    <Page />
  </div>
</template>

<script>
import MyHeader from "./MyHeader.vue";
import SideBar from "./SideBar.vue";
import Page from "./Page.vue";
export default {
  name: "App",
  components: { MyHeader, SideBar, Page },
};
</script>
