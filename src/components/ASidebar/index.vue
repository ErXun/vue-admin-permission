<template>
  <div class="a-sidebar">a-sidebar</div>
</template>

<script>
export default {
  name: "ASidebar",
  data() {
    return {};
  },
};
</script>
<style scoped lang="less">
.a-sidebar {
  width: 200px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #304156;
  color: #fff;
  z-index: 1;
  padding: 80px 20px 20px;
  box-sizing: border-box;

}
</style>
