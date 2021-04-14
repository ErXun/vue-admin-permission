<template>
  <div class="admin-home">
    <a-header />
    <a-sidebar />
    <a-content />
  </div>
</template>

<script>
import AHeader from "@/layout/AHeader"
import ASidebar from "@/layout/ASidebar"
import AContent from "@/layout/AContent"

export default {
  name: "Home",
  components: {
    AHeader,
    ASidebar,
    AContent
  }
}
</script>

<style lang="less">
.admin-home{
  position: relative;
}
</style>
