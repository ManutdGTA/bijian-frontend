<template>
  <div class="table_box">
    <el-table :data="tableData" style="width: 100%" v-loading="isLoading">
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
      <el-table-column label="名称" width="150">
        <template slot-scope="scope">
          <div class="table_box_coin">
            <div class="table_coin_img">
              <img src="@/assets/imToken.png" alt="" />
            </div>
            <div class="table_coin_info">
              <div class="table_coin_name">
                {{ scope.row.name }}
              </div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="value" label="去中心化">
        <template slot-scope="scope">
          <div v-if="scope.row.defi">
            <i class="el-icon-check green"></i>
          </div>
          <div v-else>
            <i class="el-icon-close red"></i>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="value" label="支持类型">
        <template slot-scope="scope">
          <span v-if="scope.row.cpu">
            <i class="el-icon-cpu"></i>
          </span>
          <span v-if="scope.row.phone">
            <i class="el-icon-mobile-phone"></i>
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="trade" label="支持币种"> </el-table-column>
      <el-table-column prop="priceChange" label="密钥存放"> </el-table-column>
      <el-table-column prop="liquid" label="代码开源"> </el-table-column>
      <el-table-column prop="tradeIn24H" label="中心化程度"> </el-table-column>
      <el-table-column label="多重签名">
        <template slot-scope="scope">
          <div v-if="scope.row.mutiSign">
            <i class="el-icon-check green"></i>
          </div>
          <div v-else>
            <i class="el-icon-close red"></i>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="额外服务" width="200">
        <template slot-scope="scope">
          <span v-for="(item, i) in scope.row.service" :key="i" class="mr10">
            <el-tag>{{ item }}</el-tag>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="综合评分">
        <template slot-scope="scope">
          <el-tag effect="plain">{{ scope.row.rate }}</el-tag>
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
          name: "imToken",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "完全开源",
          trade: "19个",
          tradeIn24H: "轻钱包",
          priceChange: "本地存放 ",
          rate: 5,
          defi: true,
          cpu: true,
          phone: true,
          mutiSign: true,
          service: ["交易", "理财", "Dapp"],
        },
        {
          rank: "02",
          name: "imToken",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "完全开源",
          trade: "19个",
          tradeIn24H: "轻钱包",
          priceChange: "本地存放 ",
          rate: 4,
          defi: false,
          cpu: true,
          phone: false,
        },
        {
          rank: "03",
          name: "imToken",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "完全开源",
          trade: "19个",
          tradeIn24H: "轻钱包",
          priceChange: "本地存放 ",
          rate: 3,
        },
        {
          rank: "04",
          name: "imToken",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "完全开源",
          trade: "19个",
          tradeIn24H: "轻钱包",
          priceChange: "本地存放 ",
          rate: 1.5,
        },
        {
          rank: "05",
          name: "imToken",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "完全开源",
          trade: "19个",
          tradeIn24H: "轻钱包",
          priceChange: "本地存放 ",
          rate: 1.5,
        },
        {
          rank: "06",
          name: "imToken",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "完全开源",
          trade: "19个",
          tradeIn24H: "轻钱包",
          priceChange: "本地存放 ",
          rate: 1.5,
        },
        {
          rank: "07",
          name: "imToken",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "完全开源",
          trade: "19个",
          tradeIn24H: "轻钱包",
          priceChange: "本地存放 ",
          rate: 1.5,
        },
        {
          rank: "08",
          name: "imToken",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "完全开源",
          trade: "19个",
          tradeIn24H: "轻钱包",
          priceChange: "本地存放 ",
          rate: 1.5,
        },
        {
          rank: "09",
          name: "imToken",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "完全开源",
          trade: "19个",
          tradeIn24H: "轻钱包",
          priceChange: "本地存放 ",
          rate: 1.2,
        },
        {
          rank: "10",
          name: "imToken",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "完全开源",
          trade: "19个",
          tradeIn24H: "轻钱包",
          priceChange: "本地存放 ",
          rate: 1,
        },
        {
          rank: "11",
          name: "imToken",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "完全开源",
          trade: "19个",
          tradeIn24H: "轻钱包",
          priceChange: "本地存放 ",
          rate: 0,
        },
        {
          rank: "12",
          name: "imToken",
          value: "3926.6亿",
          price: "20756.65",
          liquid: "完全开源",
          trade: "19个",
          tradeIn24H: "轻钱包",
          priceChange: "本地存放 ",
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
.red {
  color: red;
}
.green {
  color: green;
}
.mr10 {
  margin-right: 10px;
}
</style>
