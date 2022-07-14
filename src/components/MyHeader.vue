<template>
  <div class="header">
    <h1>琼琼大学管理系统</h1>
    <div class="user">{{ user }}</div>
    <div class="btn" @click="logout">退出登录</div>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  methods: {
    logout() {
      this.$store.commit("UPDATALOGOUT");
      this.$router.push("/login");
    },
  },
  computed: {
    user() {
      return this.$store.state.username;
    },
  },
};
</script>



<style lang="less" scoped>
.header {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: salmon;
  line-height: 80px;
  text-align: center;
  z-index: 2;
  .user {
    width: 100px;
    height: 30px;
    line-height: 30px;
    background-color: green;
    color: #fff;
    border-radius: 5px;
    text-align: center;
    position: absolute;
    left: 30px;
    top: 30px;
  }
  .btn {
    width: 100px;
    height: 30px;
    line-height: 30px;
    background-color: slateblue;
    color: #fff;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s ease-in;
    &:hover {
      transform: scale(1.2);
    }
    position: absolute;
    right: 50px;
    top: 30px;
  }
}
</style>