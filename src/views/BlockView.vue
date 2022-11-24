<template>
  <div>
    <TopBanner :tabIndex="3"></TopBanner>
    <div class="platform">
      <CarouselContent></CarouselContent>
      <BlockTop></BlockTop>
      <TabBox @sendSelectTab="handleReceiveTab"></TabBox>
      <TableBox :tabIndex="tabIndex"></TableBox>
    </div>
    <BottomPage></BottomPage>
  </div>
</template>
<script>
import TopBanner from "@/components/TopBanner.vue";
import BottomPage from "@/components/BottomPage.vue";
import CarouselContent from "@/components/CarouselContent.vue";
import BlockTop from "@/components/block/BlockTop.vue";
import TabBox from "@/components/block/TabBox.vue";
import TableBox from "@/components/block/TableBox.vue";
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
    BlockTop,
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
<style lang="less" scoped></style>
