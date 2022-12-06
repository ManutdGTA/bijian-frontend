<template>
  <div class="table_box">
    <el-table
      :data="tableData"
      style="width: 100%"
      v-loading="isLoading"
      @row-click="handleDetail"
    >
      <el-table-column label="" width="50">
        <template slot-scope="scope">
          <div class="table_box_coin">
            <div class="table_coin_img" @click="handleStar(scope.row)">
              <img src="@/assets/star.png" alt="" />
            </div>
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="rank" label="#" width="50"> </el-table-column>
      <!-- <el-table-column prop="name" label="币种"> </el-table-column> -->
      <el-table-column label="交易平台" width="150">
        <template slot-scope="scope">
          <div class="table_box_coin">
            <div class="table_coin_img">
              <img src="@/assets/binance.webp" alt="" />
            </div>
            <div class="table_coin_info">
              <div class="table_coin_name">
                {{ scope.row.name }}
              </div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="value" label="Exrank">
        <template>
          <div>
            <el-progress :percentage="90"></el-progress>
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="trade" label="24H额"> </el-table-column>
      <el-table-column prop="priceChange" label="24H涨跌（%）">
      </el-table-column>
      <el-table-column prop="liquid" label="资产"> </el-table-column>
      <el-table-column prop="tradeIn24H" label="交易对（个）">
      </el-table-column>

      <el-table-column label="人气指数" width="150">
        <template slot-scope="scope">
          <div>
            <el-rate v-model="scope.row.rate" disabled></el-rate>
          </div>
        </template>
      </el-table-column>
      <!-- <el-table-column prop="symbol" label="7天指数趋势"> </el-table-column> -->
    </el-table>
    <div class="pagination-container">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="sizes, prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "TableBox",
  data() {
    return {
      tableData: [
        {
          rank: "01",
          name: "Binance",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "1919.5万",
          trade: "1.57%",
          tradeIn24H: "1062",
          priceChange: "-0.83% ",
          rate: 5,
        },
        {
          rank: "02",
          name: "Binance",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "1919.5万",
          trade: "1.57%",
          tradeIn24H: "1062",
          priceChange: "-0.83% ",
          rate: 4,
        },
        {
          rank: "03",
          name: "Binance",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "1919.5万",
          trade: "1.57%",
          tradeIn24H: "1062",
          priceChange: "-0.83% ",
          rate: 3,
        },
        {
          rank: "04",
          name: "Binance",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "1919.5万",
          trade: "1.57%",
          tradeIn24H: "1062",
          priceChange: "-0.83% ",
          rate: 1.5,
        },
        {
          rank: "05",
          name: "Binance",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "1919.5万",
          trade: "1.57%",
          tradeIn24H: "1062",
          priceChange: "-0.83% ",
          rate: 1.5,
        },
        {
          rank: "06",
          name: "Binance",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "1919.5万",
          trade: "1.57%",
          tradeIn24H: "1062",
          priceChange: "-0.83% ",
          rate: 1.5,
        },
        {
          rank: "07",
          name: "Binance",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "1919.5万",
          trade: "1.57%",
          tradeIn24H: "1062",
          priceChange: "-0.83% ",
          rate: 1.5,
        },
        {
          rank: "08",
          name: "Binance",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "1919.5万",
          trade: "1.57%",
          tradeIn24H: "1062",
          priceChange: "-0.83% ",
          rate: 1.5,
        },
        {
          rank: "09",
          name: "Binance",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "1919.5万",
          trade: "1.57%",
          tradeIn24H: "1062",
          priceChange: "-0.83% ",
          rate: 1.2,
        },
        {
          rank: "10",
          name: "Binance",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "1919.5万",
          trade: "1.57%",
          tradeIn24H: "1062",
          priceChange: "-0.83% ",
          rate: 1,
        },
        {
          rank: "11",
          name: "Binance",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "1919.5万",
          trade: "1.57%",
          tradeIn24H: "1062",
          priceChange: "-0.83% ",
          rate: 0,
        },
        {
          rank: "12",
          name: "Binance",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "1919.5万",
          trade: "1.57%",
          tradeIn24H: "1062",
          priceChange: "-0.83% ",
          rate: 0,
        },
      ],
      slugData: "",
      finalData: [],
      isLoading: false,
      currentPage: 0,
    };
  },
  props: {
    tabIndex: Number,
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleStar(v) {
      console.log(v);
    },
    handleDetail(row) {
      this.$router.push({
        name: "platformDetail",
        query: { platformId: row.rank },
      });
    },
  },
  watch: {
    tabIndex(newData) {
      console.log(newData);
    },
  },
};
</script>
<style lang="less">
.table_box {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
}
.table_box .table_box_coin {
  display: flex;
  align-items: center;
}
.table_box .table_box_coin .table_coin_img {
  width: 24px;
  height: 24px;
}
.table_box .table_box_coin .table_coin_img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.table_box .table_box_coin .table_coin_info {
  margin-left: 9px;
}
.table_box .table_box_coin .table_coin_info .table_coin_name {
  font-size: 16px;
  color: #101b37;
  line-height: 22px;
  font-weight: 600;
}
.table_box .table_box_coin .table_coin_info .table_coin_nameZh {
  margin-top: 3px;
  font-size: 12px;
  color: #7c8291;
  line-height: 17px;
}
.el-table .el-table__body-wrapper .tablie_index_01 {
  font-weight: 500;
  font-size: 14px;
  color: #ee0a24;
}
.el-table .el-table__body-wrapper .tablie_index_02 {
  font-weight: 500;
  font-size: 14px;
  color: #f87211;
}
.el-table .el-table__body-wrapper .tablie_index_03 {
  font-weight: 500;
  font-size: 14px;
  color: #faab0c;
}
.pagination-container {
  background: #fff;
  padding: 32px 16px;
  text-align: center;
}
</style>
