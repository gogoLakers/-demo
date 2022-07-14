<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="index" @click="goPage(item)">
        管理{{ item.msg }}
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: ["arr"],
  methods: {
    goPage(item) {
      this.$router.push("/location").catch((err) => {
        console.log(err);
      });
      this.$router.push({ name: `${item.name}` });
    },
  },
};
</script>
<style lang="less" scoped >
ul {
  width: 100%;
  height: 50px;
  background-color: sandybrown;
  li {
    display: inline-block;
    width: 100px;
    height: 100%;
    background-color: red;
    line-height: 50px;
    text-align: center;
    margin-right: 10px;
    cursor: pointer;
    &:hover {
      color: aliceblue;
    }
  }
}
</style>