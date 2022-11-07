<template>
  <div class="platform">
    <TopBanner :tabIndex="3"></TopBanner>
    <div class="platform">
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
  name: "PlatformView",
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
