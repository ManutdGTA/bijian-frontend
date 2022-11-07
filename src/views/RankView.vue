<template>
  <div class="rank">
    <TopBanner :tabIndex="4"></TopBanner>
    <div class="rank">
      <CarouselContent></CarouselContent>
    </div>
    <BottomPage></BottomPage>
  </div>
</template>
<script>
import TopBanner from "@/components/TopBanner.vue";
import BottomPage from "@/components/BottomPage.vue";
import CarouselContent from "@/components/CarouselContent.vue";

export default {
  name: "RankView",
  data() {
    return {};
  },
  components: {
    TopBanner,
    BottomPage,
    CarouselContent,
  },
};
</script>
<style lang="less"></style>
