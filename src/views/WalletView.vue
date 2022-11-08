<template>
  <div class="block">
    <TopBanner :tabIndex="2"></TopBanner>
    <div class="block">
      <CarouselContent></CarouselContent>
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
import TabBox from "@/components/wallet/TabBox.vue";
import TableBox from "@/components/wallet/TableBox.vue";

export default {
  name: "BlockView",
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
