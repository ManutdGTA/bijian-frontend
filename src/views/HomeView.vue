<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <TopBanner :tabIndex="0"></TopBanner>
    <CarouselContent></CarouselContent>
    <NoticeBox></NoticeBox>
    <DataDetail></DataDetail>
    <TabBox @sendSelectTab="handleReceiveTab"></TabBox>
    <TabChildBox
      :tabIndex="tabIndex"
      @sendSelectChildTab="handleReceiveChildTab"
    ></TabChildBox>

    <TableBox :tabIndex="tabIndex" :tabChildIndex="tabChildIndex"></TableBox>
    <BottomPage></BottomPage>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBanner from "@/components/TopBanner.vue";
import BottomPage from "@/components/BottomPage.vue";
import CarouselContent from "@/components/CarouselContent.vue";
import NoticeBox from "@/components/NoticeBox.vue";
import DataDetail from "@/components/DataDetail.vue";
import TabBox from "@/components/home/TabBox.vue";
import TabChildBox from "@/components/home/TabChildBox.vue";

import TableBox from "@/components/home/TableBox.vue";

export default {
  name: "homeView",
  components: {
    TopBanner,
    BottomPage,
    CarouselContent,
    NoticeBox,
    DataDetail,
    TabBox,
    TabChildBox,
    TableBox,
  },
  data() {
    return {
      tabIndex: 0,
      tabChildIndex: 0,
    };
  },
  methods: {
    handleReceiveTab(v) {
      this.tabIndex = v;
    },
    handleReceiveChildTab(v) {
      this.tabChildIndex = v;
    },
  },
};
</script>

<style lang="less"></style>
