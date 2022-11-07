<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <TopBanner :tabIndex="0"></TopBanner>
    <CarouselContent></CarouselContent>
    <NoticeBox></NoticeBox>
    <DataDetail></DataDetail>
    <TabBox></TabBox>
    <TableBox></TableBox>
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
import TabBox from "@/components/TabBox.vue";
import TableBox from "@/components/TableBox.vue";

export default {
  name: "homeView",
  components: {
    TopBanner,
    BottomPage,
    CarouselContent,
    NoticeBox,
    DataDetail,
    TabBox,
    TableBox,
  },
};
</script>

<style lang="less"></style>
