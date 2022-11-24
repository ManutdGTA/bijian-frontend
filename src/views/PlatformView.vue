<template>
  <div class="platform">
    <TopBanner :tabIndex="1"></TopBanner>
    <CarouselContent></CarouselContent>
    <TabBox @sendSelectTab="handleReceiveTab"></TabBox>
    <TableBox :tabIndex="tabIndex"></TableBox>
    <BottomPage></BottomPage>
  </div>
</template>
<script>
import TopBanner from "@/components/TopBanner.vue";
import BottomPage from "@/components/BottomPage.vue";
import CarouselContent from "@/components/CarouselContent.vue";
import TabBox from "@/components/platform/TabBox.vue";
import TableBox from "@/components/platform/TableBox.vue";

export default {
  name: "PlatformView",
  data() {
    return {
      tabIndex: 0,
    };
  },
  components: {
    TopBanner,
    BottomPage,
    CarouselContent,
    TabBox,
    TableBox,
  },

  methods: {
    handleReceiveTab(v) {
      this.tabIndex = v;
    },
  },
};
</script>
<style lang="less"></style>
