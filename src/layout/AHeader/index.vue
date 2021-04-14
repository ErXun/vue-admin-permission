<template>
  <div class="a-header">
    <!-- <h1>人生如戏</h1> -->
    <div class="user">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar
            src="https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/b198a11b03745de70754823b648892b9~300x300.image"
          ></el-avatar
          ><i class="el-icon-arrow-down el-icon--right icon-position"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            ><span @click="logout">退出登录</span></el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "AHeader",
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store.dispatch("user/logout").then((res) => {
        console.log(res, "res");
        // this.$router.push(`/login?redirect=${this.$route.fullPath}`);
        this.$router.push("/login");
      });
    },
  },
};
</script>
<style scoped lang="less">
.a-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  z-index: 2;
  color: #000;
  box-shadow: 0 1px 3px rgba(18, 18, 18, 0.1);
  .user {
    position: absolute;
    top: 10px;
    right: 45px;
    cursor: pointer;
    .icon-position {
      vertical-align: super;
    }
  }
}
</style>
