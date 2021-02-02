<template>
  <div class="a-header">
    <button @click="logout">退出</button>
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
  background-color: skyblue;
  z-index: 2;
  color: #000;
}
</style>
