<template>
  <div class="table_box">
    <el-table
      :data="tableData"
      style="width: 100%"
      v-loading="isLoading"
      @row-click="handleDetail"
    >
      <el-table-column prop="rank" label="#" width="50"> </el-table-column>
      <el-table-column prop="concept" label="概念"> </el-table-column>
      <el-table-column label="领涨" width="150">
        <template slot-scope="scope">
          <div class="table_box_best">
            <div class="best_icon">
              {{ scope.row.valueToken }}
            </div>
            &nbsp;
            <div class="best_percent" style="color: rgb(22, 176, 86)">
              {{ scope.row.price }}
            </div>
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="marketValue" label="总市值额"> </el-table-column>
      <el-table-column prop="tradeIn24H" label="24H额"> </el-table-column>
      <el-table-column prop="priceChange" label="24H平均涨跌幅">
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
          concept: "基于DAG",
          valueToken: "XNO",
          price: "+75.75%",
          marketValue: "20.23亿",
          tradeIn24H: "1.87亿",
          priceChange: "+9.62%",
        },
        {
          rank: "02",
          concept: "基于DAG",
          valueToken: "XNO",
          price: "+75.75%",
          marketValue: "20.23亿",
          tradeIn24H: "1.87亿",
          priceChange: "+9.62%",
        },
        {
          rank: "03",
          concept: "基于DAG",
          valueToken: "XNO",
          price: "+75.75%",
          marketValue: "20.23亿",
          tradeIn24H: "1.87亿",
          priceChange: "+9.62%",
        },
        {
          rank: "04",
          concept: "基于DAG",
          valueToken: "XNO",
          price: "+75.75%",
          marketValue: "20.23亿",
          tradeIn24H: "1.87亿",
          priceChange: "+9.62%",
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
      this.$router.push({ name: "blockDetail", query: { blockId: row.rank } });
    },
  },
  watch: {
    tabIndex(newData) {
      console.log(newData);
    },
  },
};
</script>
<style lang="less" scoped>
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
  // color: #101b37;
  line-height: 22px;
  // font-weight: 600;
}
.table_box .table_box_coin .table_coin_info .table_coin_nameZh {
  margin-top: 3px;
  font-size: 12px;
  // color: #7c8291;
  line-height: 17px;
}
.table_box .table_box_best[data-v-93a49ede] {
  display: flex;
  align-items: center;
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
