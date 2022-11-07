<template>
  <div class="info">
    <TopBanner :tabIndex="5"></TopBanner>
    <div class="info">
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
  name: "InfoView",
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
