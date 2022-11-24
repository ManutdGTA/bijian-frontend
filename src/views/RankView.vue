<template>
  <div class="rank">
    <TopBanner :tabIndex="4"></TopBanner>

    <CarouselContent></CarouselContent>
    <RankBlock></RankBlock>
    <BottomPage></BottomPage>
  </div>
</template>
<script>
import TopBanner from "@/components/TopBanner.vue";
import BottomPage from "@/components/BottomPage.vue";
import CarouselContent from "@/components/CarouselContent.vue";
import RankBlock from "@/components/rank/RankBlock.vue";

export default {
  name: "RankView",
  data() {
    return {};
  },
  components: {
    TopBanner,
    BottomPage,
    CarouselContent,
    RankBlock,
  },
};
</script>
<style lang="less"></style>
