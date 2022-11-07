<template>
  <div class="block">
    <TopBanner :tabIndex="2"></TopBanner>
    <div class="block">
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
  name: "BlockView",
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
