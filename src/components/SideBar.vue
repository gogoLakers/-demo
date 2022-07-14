<template>
  <div class="side">
    <ul>
      <li><router-link to="/backstage/home">首页</router-link></li>
      <li><router-link to="/backstage/headMaster">校长</router-link></li>
      <li><router-link to="/backstage/teacher">教师</router-link></li>
      <li><router-link to="/backstage/student">学生</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style lang="less" scoped>
.side {
  width: 120px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 120px 10px;
  padding-bottom: 10px;
  background-color: aquamarine;
  z-index: 1;
  li {
    display: block;
    font-size: 20px;
    height: 50px;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    line-height: 50px;
    &:hover {
      background-color: yellowgreen;
    }
  }
}
</style>