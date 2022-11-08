<template>
  <div>
    <div class="tabs_child_box" v-if="tabIndex === 1">
      <div
        class="tabs_child_item"
        :class="{ tabs_child_item_act: tabChildIndex === 0 }"
        @click="handleSelecChildtTab(0)"
      >
        所有
      </div>
      <div
        class="tabs_child_item"
        :class="{ tabs_child_item_act: tabChildIndex === 1 }"
        @click="handleSelecChildtTab(1)"
      >
        币安网
      </div>
      <div
        class="tabs_child_item"
        :class="{ tabs_child_item_act: tabChildIndex === 2 }"
        @click="handleSelecChildtTab(2)"
      >
        欧易OKX
      </div>
      <div
        class="tabs_child_item"
        :class="{ tabs_child_item_act: tabChildIndex === 3 }"
        @click="handleSelecChildtTab(3)"
      >
        火币全球站
      </div>
      <div
        class="tabs_child_item"
        :class="{ tabs_child_item_act: tabChildIndex === 4 }"
        @click="handleSelecChildtTab(4)"
      >
        BitMEX
      </div>
      <div
        class="tabs_child_item"
        :class="{ tabs_child_item_act: tabChildIndex === 5 }"
        @click="handleSelecChildtTab(5)"
      >
        MEXC Global
      </div>
      <div
        class="tabs_child_item"
        :class="{ tabs_child_item_act: tabChildIndex === 6 }"
        @click="handleSelecChildtTab(6)"
      >
        芝麻开门
      </div>
      <div
        class="tabs_child_item"
        :class="{ tabs_child_item_act: tabChildIndex === 7 }"
        @click="handleSelecChildtTab(7)"
      >
        AAX
      </div>
      <div
        class="tabs_child_item"
        :class="{ tabs_child_item_act: tabChildIndex === 8 }"
        @click="handleSelecChildtTab(8)"
      >
        Bitget
      </div>
    </div>
    <div class="tabs_child_box" v-if="tabIndex === 5">
      <div
        class="tabs_child_item"
        :class="{ tabs_child_item_act: tabChildIndex === 0 }"
        @click="handleSelecChildtTab(0)"
      >
        IEO首发
      </div>
      <div
        class="tabs_child_item"
        :class="{ tabs_child_item_act: tabChildIndex === 1 }"
        @click="handleSelecChildtTab(1)"
      >
        交易所上币
      </div>
      <div
        class="tabs_child_item"
        :class="{ tabs_child_item_act: tabChildIndex === 2 }"
        @click="handleSelecChildtTab(2)"
      >
        交易所挖矿
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabChildBox",
  data() {
    return {
      tabChildIndex: 0,
    };
  },
  props: {
    tabIndex: Number,
  },
  methods: {
    handleSelecChildtTab(v) {
      this.tabChildIndex = v;
      this.$emit("sendSelectChildTab", v);
    },
  },
  watch: {
    tabIndex() {
      this.tabChildIndex = 0;
    },
  },
};
</script>
<style lang="less">
.tabs_child_box {
  display: flex;
  align-items: center;
  margin-top: 16px;
  border-top: 1px solid #f9f9fa;
  padding-top: 16px;
  width: 1200px;
  margin: 0 auto;
}
.tabs_child_box .tabs_child_item {
  margin-right: 16px;
  padding: 6px 16px;
  border-radius: 20px;
  border: 1px solid #dbdde1;
  cursor: pointer;
  color: #101b37;
  font-size: 14px;
}
.tabs_child_box .tabs_child_item {
  margin-right: 16px;
  padding: 6px 16px;
  border-radius: 20px;
  border: 1px solid #dbdde1;
  cursor: pointer;
  color: #101b37;
  font-size: 14px;
}
.tabs_child_box .tabs_child_item_act {
  border: 1px solid #1069fb;
  color: #1069fb;
  font-weight: 600;
}
</style>
