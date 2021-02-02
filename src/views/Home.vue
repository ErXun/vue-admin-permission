<template>
  <div class="admin-home">
    <a-header />
    <a-sidebar />
    <a-content />
  </div>
</template>

<script>
import AHeader from "@/components/AHeader"
import ASidebar from "@/components/ASidebar"
import AContent from "@/components/AContent"

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
