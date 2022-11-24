<template>
  <div class="ranking">
    <div class="table_box">
      <div class="table_item">
        <div class="table_item_title">
          <p class="table_title_left">涨幅排行榜</p>
          <p class="table_title_right">查看更多 &gt;</p>
        </div>
        <div class="table_item_tab">
          <div class="table_tab_item selected">今日</div>
          <div class="table_tab_item">24小时</div>
          <div class="table_tab_item">最近7天</div>
          <div class="table_tab_item">1小时</div>
        </div>
        <div class="table_content">
          <el-table :data="tableData" style="width: 100%" v-loading="isLoading">
            <el-table-column prop="rank" label="#" width="50">
            </el-table-column>
            <el-table-column prop="concept" label="币种">
              <template slot-scope="scope">
                <div class="table_box_coin">
                  <div class="table_coin_img">
                    <img src="@/assets/binance.webp" alt="" />
                  </div>
                  <div class="table_coin_info">
                    {{ scope.row.name }}
                  </div>
                </div>
              </template>
            </el-table-column>

            <el-table-column prop="price" label="最新价"> </el-table-column>
            <el-table-column prop="priceChange" label="今日涨幅">
            </el-table-column>

            <!-- <el-table-column prop="symbol" label="7天指数趋势"> </el-table-column> -->
          </el-table>
        </div>
      </div>
      <div class="table_item">
        <div class="table_item_title">
          <p class="table_title_left">涨幅排行榜</p>
          <p class="table_title_right">查看更多 &gt;</p>
        </div>
        <div class="table_item_tab">
          <div class="table_tab_item selected">今日</div>
          <div class="table_tab_item">24小时</div>
          <div class="table_tab_item">最近7天</div>
          <div class="table_tab_item">1小时</div>
        </div>
        <div class="table_content">
          <el-table :data="tableData" style="width: 100%" v-loading="isLoading">
            <el-table-column prop="rank" label="#" width="50">
            </el-table-column>
            <el-table-column prop="concept" label="币种">
              <template slot-scope="scope">
                <div class="table_box_coin">
                  <div class="table_coin_img">
                    <img src="@/assets/binance.webp" alt="" />
                  </div>
                  <div class="table_coin_info">
                    {{ scope.row.name }}
                  </div>
                </div>
              </template>
            </el-table-column>

            <el-table-column prop="price" label="最新价"> </el-table-column>
            <el-table-column prop="priceChange" label="今日涨幅">
            </el-table-column>

            <!-- <el-table-column prop="symbol" label="7天指数趋势"> </el-table-column> -->
          </el-table>
        </div>
      </div>
      <div class="table_item">
        <div class="table_item_title">
          <p class="table_title_left">涨幅排行榜</p>
          <p class="table_title_right">查看更多 &gt;</p>
        </div>
        <div class="table_item_tab">
          <div class="table_tab_item selected">今日</div>
          <div class="table_tab_item">24小时</div>
          <div class="table_tab_item">最近7天</div>
          <div class="table_tab_item">1小时</div>
        </div>
        <div class="table_content">
          <el-table :data="tableData" style="width: 100%" v-loading="isLoading">
            <el-table-column prop="rank" label="#" width="50">
            </el-table-column>
            <el-table-column prop="concept" label="币种">
              <template slot-scope="scope">
                <div class="table_box_coin">
                  <div class="table_coin_img">
                    <img src="@/assets/binance.webp" alt="" />
                  </div>
                  <div class="table_coin_info">
                    {{ scope.row.name }}
                  </div>
                </div>
              </template>
            </el-table-column>

            <el-table-column prop="price" label="最新价"> </el-table-column>
            <el-table-column prop="priceChange" label="今日涨幅">
            </el-table-column>

            <!-- <el-table-column prop="symbol" label="7天指数趋势"> </el-table-column> -->
          </el-table>
        </div>
      </div>
      <div class="table_item">
        <div class="table_item_title">
          <p class="table_title_left">涨幅排行榜</p>
          <p class="table_title_right">查看更多 &gt;</p>
        </div>
        <div class="table_item_tab">
          <div class="table_tab_item selected">今日</div>
          <div class="table_tab_item">24小时</div>
          <div class="table_tab_item">最近7天</div>
          <div class="table_tab_item">1小时</div>
        </div>
        <div class="table_content">
          <el-table :data="tableData" style="width: 100%" v-loading="isLoading">
            <el-table-column prop="rank" label="#" width="50">
            </el-table-column>
            <el-table-column prop="concept" label="币种">
              <template slot-scope="scope">
                <div class="table_box_coin">
                  <div class="table_coin_img">
                    <img src="@/assets/binance.webp" alt="" />
                  </div>
                  <div class="table_coin_info">
                    {{ scope.row.name }}
                  </div>
                </div>
              </template>
            </el-table-column>

            <el-table-column prop="price" label="最新价"> </el-table-column>
            <el-table-column prop="priceChange" label="今日涨幅">
            </el-table-column>

            <!-- <el-table-column prop="symbol" label="7天指数趋势"> </el-table-column> -->
          </el-table>
        </div>
      </div>
      <div class="table_item">
        <div class="table_item_title">
          <p class="table_title_left">涨幅排行榜</p>
          <p class="table_title_right">查看更多 &gt;</p>
        </div>
        <div class="table_item_tab">
          <div class="table_tab_item selected">今日</div>
          <div class="table_tab_item">24小时</div>
          <div class="table_tab_item">最近7天</div>
          <div class="table_tab_item">1小时</div>
        </div>
        <div class="table_content">
          <el-table :data="tableData" style="width: 100%" v-loading="isLoading">
            <el-table-column prop="rank" label="#" width="50">
            </el-table-column>
            <el-table-column prop="concept" label="币种">
              <template slot-scope="scope">
                <div class="table_box_coin">
                  <div class="table_coin_img">
                    <img src="@/assets/binance.webp" alt="" />
                  </div>
                  <div class="table_coin_info">
                    {{ scope.row.name }}
                  </div>
                </div>
              </template>
            </el-table-column>

            <el-table-column prop="price" label="最新价"> </el-table-column>
            <el-table-column prop="priceChange" label="今日涨幅">
            </el-table-column>

            <!-- <el-table-column prop="symbol" label="7天指数趋势"> </el-table-column> -->
          </el-table>
        </div>
      </div>
      <div class="table_item">
        <div class="table_item_title">
          <p class="table_title_left">涨幅排行榜</p>
          <p class="table_title_right">查看更多 &gt;</p>
        </div>
        <div class="table_item_tab">
          <div class="table_tab_item selected">今日</div>
          <div class="table_tab_item">24小时</div>
          <div class="table_tab_item">最近7天</div>
          <div class="table_tab_item">1小时</div>
        </div>
        <div class="table_content">
          <el-table :data="tableData" style="width: 100%" v-loading="isLoading">
            <el-table-column prop="rank" label="#" width="50">
            </el-table-column>
            <el-table-column prop="concept" label="币种">
              <template slot-scope="scope">
                <div class="table_box_coin">
                  <div class="table_coin_img">
                    <img src="@/assets/binance.webp" alt="" />
                  </div>
                  <div class="table_coin_info">
                    {{ scope.row.name }}
                  </div>
                </div>
              </template>
            </el-table-column>

            <el-table-column prop="price" label="最新价"> </el-table-column>
            <el-table-column prop="priceChange" label="今日涨幅">
            </el-table-column>

            <!-- <el-table-column prop="symbol" label="7天指数趋势"> </el-table-column> -->
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "rankBlock",
  data() {
    return {
      tableData: [
        {
          rank: "01",
          name: "KRAUSE",
          img: "https://s2.gongft.com/logo/1/krause.png?x-oss-process=style/coin_36&v=1638236423",
          priceChange: "+103.61%",
          concept: "DAO",
          price: "0.0235695",
        },
        {
          rank: "02",
          name: "KRAUSE",
          img: "https://s2.gongft.com/logo/1/krause.png?x-oss-process=style/coin_36&v=1638236423",
          priceChange: "+103.61%",
          concept: "DAO",
          price: "0.0235695",
        },
        {
          rank: "03",
          name: "KRAUSE",
          img: "https://s2.gongft.com/logo/1/krause.png?x-oss-process=style/coin_36&v=1638236423",
          priceChange: "+103.61%",
          concept: "DAO",
          price: "0.0235695",
        },
        {
          rank: "04",
          name: "KRAUSE",
          img: "https://s2.gongft.com/logo/1/krause.png?x-oss-process=style/coin_36&v=1638236423",
          priceChange: "+103.61%",
          concept: "DAO",
          price: "0.0235695",
        },
      ],
      isLoading: false,
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.ranking .table_box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 66px;
  flex-wrap: wrap;
}
.ranking .table_box .table_item {
  padding: 20px 0;
  width: 390px;
  min-height: 562px;
  background: #fff;
  box-shadow: 0 2px 8px 0 hsl(225deg 9% 74% / 20%);
  border-radius: 8px;
  border: 1px solid #f9f9fa;
  margin-bottom: 16px;
  box-sizing: border-box;
}
.ranking .table_box .table_item_title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
}
.ranking .table_box .table_item_title .table_title_left {
  font-size: 16px;
  color: #101b37;
  line-height: 22px;
  font-weight: 600;
}
.ranking .table_box .table_item_title .table_title_right {
  font-size: 12px;
  color: #1069fb;
  line-height: 17px;
  cursor: pointer;
}
.ranking .table_box .table_item_tab {
  display: flex;
  align-items: center;
  margin-top: 16px;
  padding: 0 16px;
}
.ranking .table_box .table_item_tab .table_tab_item.selected {
  color: #1069fb;
  border: 1px solid #1069fb;
}
.ranking .table_box .table_content {
  margin-top: 20px;
}
.ranking .table_box .table_item_tab .table_tab_item {
  margin-right: 12px;
  width: 80px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid #dbdde1;
  line-height: 24px;
  text-align: center;
  font-size: 12px;
  color: #7c8291;
  cursor: pointer;
}
.ranking .table_box .table_content .table_box_coin[data-v-06782e0f] {
  display: flex;
  align-items: center;
}
.ranking .table_box .table_content .table_box_coin img[data-v-06782e0f] {
  margin-right: 8px;
  border-radius: 50%;
  width: 18px;
  height: 18px;
}
.ranking
  .table_box
  .table_content
  .table_box_coin
  .table_coin_info[data-v-06782e0f] {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 14px;
  color: #101b37;
  line-height: 20px;
}
</style>
