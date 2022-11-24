<template>
  <div>
    <TopBanner :tabIndex="6"></TopBanner>
    <div class="fast_info">
      <h2>敬请期待！</h2>
    </div>
    <BottomPage></BottomPage>
  </div>
</template>
<script>
import TopBanner from "@/components/TopBanner.vue";
import BottomPage from "@/components/BottomPage.vue";

export default {
  name: "FastInfoView",
  data() {
    return {};
  },
  components: {
    TopBanner,
    BottomPage,
  },
};
</script>
<style lang="less">
.fast_info {
  width: 1200px;
  margin: 0 auto;
  h2 {
    font-size: 50px;
  }
}
</style>
