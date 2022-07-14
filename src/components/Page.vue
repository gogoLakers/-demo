<template>
  <div class="page">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Page",
};
</script>

<style>
.page {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: skyblue;
  padding-top: 120px;
  padding-left: 150px;
}
</style>