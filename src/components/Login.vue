<template>
  <div class="container">
    <h1>登录</h1>
    <div class="from">
      <div>
        <span>账号：</span>
        <input type="text" placeholder="请输入用户名" v-model="info.username" />
      </div>
      <div>
        <span>密码：</span>
        <input
          type="password"
          placeholder="请输入密码"
          v-model="info.password"
        />
      </div>
    </div>
    <div class="btn" @click="login" @keyup.esc="keyDown(e)">点击登录</div>
    <div class="hint">
      master:所有模块<br />
      teacher:首页、教师<br />
      student:首页、学生<br />
      密码均为123456
    </div>
  </div>
</template>

<script>
import { reqLogin } from "@/utils/index";
import { mapMutations } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      info: {
        username: "",
        password: "123456",
      },
    };
  },
  mounted() {
    // 绑定监听事件
    window.addEventListener("keydown", this.keyDown);
  },
  methods: {
    ...mapMutations(["UPDATEUSER"]),
    async login() {
      let result = await reqLogin(this.info);
      if (result.data.code == 200) {
        console.log(result);
        this.UPDATEUSER(result.data.userinfo);
        this.$router.push("/backstage");
      } else {
        alert("您的账号或密码不正确，请重新输入");
      }
    },
    keyDown(e) {
      if (e.keyCode == 13) {
        this.login();
      }
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 550px;
  height: 300px;
  border-radius: 50px;
  background-color: skyblue;
  color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .from {
    margin-top: 15px;
    div {
      input {
        width: 180px;
        height: 25px;
      }
      margin: 10px 0;
    }
  }
  .btn {
    width: 100px;
    height: 30px;
    line-height: 30px;
    background-color: slateblue;
    border-radius: 5px;
    text-align: center;
    margin: 10px;
    cursor: pointer;
    transition: transform 0.3s ease-in;
    &:hover {
      transform: scale(1.2);
    }
  }
  .hint {
    color: coral;
  }
}
</style>