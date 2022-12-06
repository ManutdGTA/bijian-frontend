<template>
  <div>
    <TopBanner :tabIndex="0"></TopBanner>
    <div class="blockDetail">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/block">板块</a></el-breadcrumb-item>
        <span>POS</span>
      </el-breadcrumb>
      <div class="infoBox">
        <div class="infoBox_left">
          <div class="name">PoS</div>
          <div class="average">平均涨跌幅</div>
          <div class="average_percentage" style="background: rgb(22, 176, 86)">
            +25.73%
          </div>
        </div>
        <div class="infoBox_right">
          <div class="infoBox_list">
            <div class="infoBox_item">
              <div>上涨数</div>
              <div>8/28</div>
            </div>
            <div class="infoBox_item">
              <div>下跌数</div>
              <div>20/28</div>
            </div>
          </div>
          <div class="infoBox_list">
            <div class="infoBox_item">
              <div>领涨</div>
              <div>
                PART
                <span style="color: rgb(22, 176, 86)">+542.52%</span>
              </div>
            </div>
            <div class="infoBox_item">
              <div>领跌</div>
              <div>
                RDN
                <span style="color: rgb(238, 10, 36)">-41.29%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="table_box"></div>
    </div>

    <BottomPage></BottomPage>
  </div>
</template>

<script>
import TopBanner from "@/components/TopBanner.vue";
import BottomPage from "@/components/BottomPage.vue";

export default {
  name: "blockDetail",
  components: {
    TopBanner,
    BottomPage,
  },
};
</script>

<style lang="less">
.blockDetail {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  .infoBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .infoBox .infoBox_left .name {
    font-size: 24px;
    font-weight: 700;
    color: #101b37;
  }
  .infoBox .infoBox_left .average {
    color: #585f72;
    font-size: 14px;
    margin: 10px 0 7px 0;
  }
  .infoBox .infoBox_left .average_percentage {
    height: 48px;
    min-width: 100px;
    background: #16b056;
    border-radius: 8px;
    padding: 0 18px;
    color: #fff;
    text-align: center;
    line-height: 48px;
    font-size: 24px;
    display: inline-block;
  }
  .infoBox .infoBox_right {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .infoBox .infoBox_right .infoBox_list:first-child {
    margin-right: 40px;
  }
  .infoBox .infoBox_right .infoBox_list .infoBox_item {
    width: 50%;
    text-align: center;
  }
  .infoBox .infoBox_right .infoBox_list .infoBox_item div:first-child {
    color: #585f72;
    margin-bottom: 10px;
  }
  .infoBox .infoBox_right .infoBox_list .infoBox_item div:nth-child(2) {
    color: #343d55;
    font-size: 20px;
    font-weight: 700;
  }
  .infoBox .infoBox_right .infoBox_list .infoBox_item {
    width: 50%;
    text-align: center;
  }
  .infoBox .infoBox_right .infoBox_list {
    width: 450px;
    height: 120px;
    background: #f9f9fa;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .table_box {
    border-radius: 8px;
    border: 1px solid #f3f3f5;
    padding: 20px 16px;
    box-sizing: border-box;
    margin: 40px 0;
  }
}
</style>
