<template>
  <div class="info">
    <TopBanner :tabIndex="5"></TopBanner>
    <NewsTab></NewsTab>
    <BottomPage></BottomPage>
  </div>
</template>
<script>
import TopBanner from "@/components/TopBanner.vue";
import BottomPage from "@/components/BottomPage.vue";
import NewsTab from "@/components/info/NewsTab.vue";

export default {
  name: "InfoView",
  data() {
    return {};
  },
  components: {
    TopBanner,
    BottomPage,
    NewsTab,
  },
};
</script>
<style lang="less"></style>
