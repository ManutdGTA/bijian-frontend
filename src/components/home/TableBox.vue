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

      <el-table-column prop="rank" label="#"> </el-table-column>
      <!-- <el-table-column prop="name" label="币种"> </el-table-column> -->
      <el-table-column label="币种" width="150">
        <template slot-scope="scope">
          <div class="table_box_coin">
            <div class="table_coin_img">
              <img src="@/assets/bitcoin.webp" alt="" />
            </div>
            <div class="table_coin_info">
              <div class="table_coin_name">
                {{ scope.row.name }}
              </div>
              <div class="table_coin_nameZh">比特币</div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="value" label="流通市值"> </el-table-column>
      <el-table-column prop="price" label="最新价"> </el-table-column>
      <el-table-column prop="trade" label="24H额"> </el-table-column>
      <el-table-column prop="liquid" label="流通数量"> </el-table-column>
      <el-table-column prop="tradeIn24H" label="24H换手"> </el-table-column>
      <el-table-column prop="priceChange" label="今日涨幅（%）">
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
          name: "BTC",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "1919.5万",
          trade: "1.57%",
          tradeIn24H: "1.57%",
          priceChange: "-0.83% ",
        },
        {
          rank: "02",
          name: "BTC",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "1919.5万",
          trade: "1.57%",
          tradeIn24H: "1.57%",
          priceChange: "-0.83% ",
        },
        {
          rank: "03",
          name: "BTC",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "1919.5万",
          trade: "1.57%",
          tradeIn24H: "1.57%",
          priceChange: "-0.83% ",
        },
        {
          rank: "04",
          name: "BTC",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "1919.5万",
          trade: "1.57%",
          tradeIn24H: "1.57%",
          priceChange: "-0.83% ",
        },
        {
          rank: "05",
          name: "BTC",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "1919.5万",
          trade: "1.57%",
          tradeIn24H: "1.57%",
          priceChange: "-0.83% ",
        },
        {
          rank: "06",
          name: "BTC",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "1919.5万",
          trade: "1.57%",
          tradeIn24H: "1.57%",
          priceChange: "-0.83% ",
        },
        {
          rank: "07",
          name: "BTC",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "1919.5万",
          trade: "1.57%",
          tradeIn24H: "1.57%",
          priceChange: "-0.83% ",
        },
        {
          rank: "08",
          name: "BTC",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "1919.5万",
          trade: "1.57%",
          tradeIn24H: "1.57%",
          priceChange: "-0.83% ",
        },
        {
          rank: "09",
          name: "BTC",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "1919.5万",
          trade: "1.57%",
          tradeIn24H: "1.57%",
          priceChange: "-0.83% ",
        },
        {
          rank: "10",
          name: "BTC",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "1919.5万",
          trade: "1.57%",
          tradeIn24H: "1.57%",
          priceChange: "-0.83% ",
        },
        {
          rank: "11",
          name: "BTC",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "1919.5万",
          trade: "1.57%",
          tradeIn24H: "1.57%",
          priceChange: "-0.83% ",
        },
        {
          rank: "12",
          name: "BTC",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "1919.5万",
          trade: "1.57%",
          tradeIn24H: "1.57%",
          priceChange: "-0.83% ",
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
    tabChildIndex: Number,
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
    handleFetch() {
      this.$axios
        .get(
          "https://data.mifengcha.com/api/v3/symbols?api_key=PFPJNNRZUZOHMTPJR0XCAMX6MAQZSSOHZSJ6J6EG"
        )
        .then((response) => {
          console.log(response.data);
        });
    },
    handleDetail(row) {
      this.$router.push({ name: "homeDetail", query: { tokenId: row.rank } });
    },
  },
  watch: {
    tabIndex(newData) {
      console.log("tabIndex", newData);
    },
    tabChildIndex(newData) {
      console.log("tabChildIndex", newData);
    },
  },
  created() {
    this.handleFetch();
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
