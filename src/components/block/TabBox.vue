<template>
  <div class="tabs_box">
    <div class="tabs_box_left">
      <div
        class="tabs_box_item"
        :class="{ tabs_box_item_atcive: tabIndex === 0 }"
        @click="handleSelectTab(0)"
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAl5JREFUOE+dlE1IVFEUx///O0/NcCFGX4ogglFIHzIfMjgvzVVCZuk8yaRF0LZWQbQJWkWLaNG6nYb4piyjj00lM5OS7w0WGC0EF5lSSNKiEvS9d+JJE2O9GaG7uYvzv797zv/cc4ktVotu7PQlMxlzuZSUW3AY0Y13vsbOmIcBSDF9SVBE7+8DJOUfFpH+XDZl/h8oYcwA2EbCE8AtlVXRjKLt/d3iyTjBcyJwQbkHMGlnRu8HZVUIYmtHb50jWhNdaQJxCUCFvQf7YTZLJDH7HiRBue2BcyGE5qz0yKe8bwzrvXuB0GMCBwBsL7jth4icz/sS0ZM9AIcAVBVofgrwAXC72Rw3aio1WAAaIbgrIQ5rdObeTDxYDOgS43Gjdk25+5RSZwW8AGB+1UF0o7To0Z56T8pfUrCLSrqsdGqy1LOItRtxz8MzAZYV1zqt9KOFPx61tJ2sDbHiBYg6kies9Gg6CBZrT+qexycAllwv1DnzemTJ123qWmvrwG633HkFoNbOmNVBoLBurFDwhRqOWRPm57zmn/aH9eQQBQk7m2oIAkV0Y56CKStrDhbGg0D+SHzMZVLdG/4ljOP+bmXN5/4eSRjjIBrsjHmoKCgcDpexsvG7kLfgyVMq3ACQ+H0gKx6uUrELIpdldb4ql8utB5YWbetrFqVmASwAqBdiUQmviwhF4RoFdfkYXOegPTnmazfWptIKhnQFkJtlDu9MTZmrvjAeNyrXNbkI8AqAmr/HZRMoFju9wytXZxzNHX478fBbkNlHOk5Va05oUK15I9PTY1+Ldm2L/6lo+BcnNem5TExPfwAAAABJRU5ErkJggg=="
          alt=""
          class="optional_icon"
          style="display: none"
        />
        概念板块
      </div>
    </div>
    <div class="tabs_box_right">
      <div class="ml16">
        <el-dropdown>
          <span class="el-dropdown-link">
            美元<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>英镑</el-dropdown-item>
            <el-dropdown-item>加元</el-dropdown-item>
            <el-dropdown-item>新台币</el-dropdown-item>
            <el-dropdown-item>卢比</el-dropdown-item>
            <el-dropdown-item>比特币</el-dropdown-item>
            <el-dropdown-item>澳元</el-dropdown-item>
            <el-dropdown-item>港币</el-dropdown-item>
            <el-dropdown-item>美元</el-dropdown-item>
            <el-dropdown-item>人民币</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBox",
  data() {
    return {
      tabIndex: 0,
    };
  },
  methods: {
    handleSelectTab(v) {
      this.tabIndex = v;
      this.$emit("sendSelectTab", v);
    },
  },
};
</script>
<style lang="less" scoped>
.tabs_box {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
}
.tabs_box .tabs_box_left,
.tabs_box {
  display: flex;
  align-items: center;
}
.tabs_box .tabs_box_item {
  display: flex;
  align-items: center;
  margin-right: 16px;
  padding: 7px 16px;
  background: rgba(16, 105, 251, 0.1);
  border-radius: 8px;
  font-size: 16px;
  color: #1069fb;
  font-weight: 700;
  cursor: pointer;
  position: relative;
}
.tabs_box .tabs_box_item:hover {
  color: #1069fb;
  font-weight: 700;
}

.tabs_box .tabs_box_right {
  display: flex;
  align-items: center;
}
.ml16 {
  margin-left: 16px;
}
</style>
