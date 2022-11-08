<template>
  <div class="tabs_box">
    <div class="tabs_box_left">
      <div class="tabs_box_item">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAl5JREFUOE+dlE1IVFEUx///O0/NcCFGX4ogglFIHzIfMjgvzVVCZuk8yaRF0LZWQbQJWkWLaNG6nYb4piyjj00lM5OS7w0WGC0EF5lSSNKiEvS9d+JJE2O9GaG7uYvzv797zv/cc4ktVotu7PQlMxlzuZSUW3AY0Y13vsbOmIcBSDF9SVBE7+8DJOUfFpH+XDZl/h8oYcwA2EbCE8AtlVXRjKLt/d3iyTjBcyJwQbkHMGlnRu8HZVUIYmtHb50jWhNdaQJxCUCFvQf7YTZLJDH7HiRBue2BcyGE5qz0yKe8bwzrvXuB0GMCBwBsL7jth4icz/sS0ZM9AIcAVBVofgrwAXC72Rw3aio1WAAaIbgrIQ5rdObeTDxYDOgS43Gjdk25+5RSZwW8AGB+1UF0o7To0Z56T8pfUrCLSrqsdGqy1LOItRtxz8MzAZYV1zqt9KOFPx61tJ2sDbHiBYg6kies9Gg6CBZrT+qexycAllwv1DnzemTJ123qWmvrwG633HkFoNbOmNVBoLBurFDwhRqOWRPm57zmn/aH9eQQBQk7m2oIAkV0Y56CKStrDhbGg0D+SHzMZVLdG/4ljOP+bmXN5/4eSRjjIBrsjHmoKCgcDpexsvG7kLfgyVMq3ACQ+H0gKx6uUrELIpdldb4ql8utB5YWbetrFqVmASwAqBdiUQmviwhF4RoFdfkYXOegPTnmazfWptIKhnQFkJtlDu9MTZmrvjAeNyrXNbkI8AqAmr/HZRMoFju9wytXZxzNHX478fBbkNlHOk5Va05oUK15I9PTY1+Ldm2L/6lo+BcnNem5TExPfwAAAABJRU5ErkJggg=="
          alt=""
          class="optional_icon"
        />
        关注
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAKFJREFUOE/t0z0SgjAQhuF3L+OVoIKC8QJJYyd2NskFHApSkSt5mXWYUYnyk4aStJs8M/vtRtjpyE4OB5RPcpZRUZkTQhN7dwHRX0KlqO0dpYvBP9PaEmREcEA39O48YSplbR9Ao4qNwftNaCyWlbkitBMGHwSlHYK//Te7Ov4Uez9q1pCxvrlHCcYWkoW+bQJL7WQzyg97fuP4IvnUdsvoBY+SNhPN2LsVAAAAAElFTkSuQmCC"
          alt=""
          class="down_icon"
          style="display: none"
        /><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAALNJREFUOE/t0rEKwjAQBuD/iAXHCj6DLxaEFjdd3Kybi27SgvTFfAbBjEINJ1E01bQ9h47NesnH5b8j9HSoJwcDJCcZZDRd3GbWKn0tRmuA+JtgmiT3nVK2vBzH53otgOK0WgLYA1SaXM09xhSn9gSwBrAyeXTohFwxTqoNCJnHgA/CyEwRbX8/2zr+OvZ6xBotiKt27pHHnNPcybszcSGfGICm74gZycMOb4gd/YsOkJzUA4NBORPscF1AAAAAAElFTkSuQmCC"
          alt=""
          class="down_icon"
          style="display: none"
        /><!---->
      </div>
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
        全球交易所排行榜
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAKFJREFUOE/t0z0SgjAQhuF3L+OVoIKC8QJJYyd2NskFHApSkSt5mXWYUYnyk4aStJs8M/vtRtjpyE4OB5RPcpZRUZkTQhN7dwHRX0KlqO0dpYvBP9PaEmREcEA39O48YSplbR9Ao4qNwftNaCyWlbkitBMGHwSlHYK//Te7Ov4Uez9q1pCxvrlHCcYWkoW+bQJL7WQzyg97fuP4IvnUdsvoBY+SNhPN2LsVAAAAAElFTkSuQmCC"
          alt=""
          class="down_icon"
          style="display: none"
        /><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAALNJREFUOE/t0rEKwjAQBuD/iAXHCj6DLxaEFjdd3Kybi27SgvTFfAbBjEINJ1E01bQ9h47NesnH5b8j9HSoJwcDJCcZZDRd3GbWKn0tRmuA+JtgmiT3nVK2vBzH53otgOK0WgLYA1SaXM09xhSn9gSwBrAyeXTohFwxTqoNCJnHgA/CyEwRbX8/2zr+OvZ6xBotiKt27pHHnNPcybszcSGfGICm74gZycMOb4gd/YsOkJzUA4NBORPscF1AAAAAAElFTkSuQmCC"
          alt=""
          class="down_icon"
          style="display: none"
        /><!---->
      </div>
      <div
        class="tabs_box_item"
        :class="{ tabs_box_item_atcive: tabIndex === 1 }"
        @click="handleSelectTab(1)"
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAl5JREFUOE+dlE1IVFEUx///O0/NcCFGX4ogglFIHzIfMjgvzVVCZuk8yaRF0LZWQbQJWkWLaNG6nYb4piyjj00lM5OS7w0WGC0EF5lSSNKiEvS9d+JJE2O9GaG7uYvzv797zv/cc4ktVotu7PQlMxlzuZSUW3AY0Y13vsbOmIcBSDF9SVBE7+8DJOUfFpH+XDZl/h8oYcwA2EbCE8AtlVXRjKLt/d3iyTjBcyJwQbkHMGlnRu8HZVUIYmtHb50jWhNdaQJxCUCFvQf7YTZLJDH7HiRBue2BcyGE5qz0yKe8bwzrvXuB0GMCBwBsL7jth4icz/sS0ZM9AIcAVBVofgrwAXC72Rw3aio1WAAaIbgrIQ5rdObeTDxYDOgS43Gjdk25+5RSZwW8AGB+1UF0o7To0Z56T8pfUrCLSrqsdGqy1LOItRtxz8MzAZYV1zqt9KOFPx61tJ2sDbHiBYg6kies9Gg6CBZrT+qexycAllwv1DnzemTJ123qWmvrwG633HkFoNbOmNVBoLBurFDwhRqOWRPm57zmn/aH9eQQBQk7m2oIAkV0Y56CKStrDhbGg0D+SHzMZVLdG/4ljOP+bmXN5/4eSRjjIBrsjHmoKCgcDpexsvG7kLfgyVMq3ACQ+H0gKx6uUrELIpdldb4ql8utB5YWbetrFqVmASwAqBdiUQmviwhF4RoFdfkYXOegPTnmazfWptIKhnQFkJtlDu9MTZmrvjAeNyrXNbkI8AqAmr/HZRMoFju9wytXZxzNHX478fBbkNlHOk5Va05oUK15I9PTY1+Ldm2L/6lo+BcnNem5TExPfwAAAABJRU5ErkJggg=="
          alt=""
          class="optional_icon"
          style="display: none"
        />
        DEX
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAKFJREFUOE/t0z0SgjAQhuF3L+OVoIKC8QJJYyd2NskFHApSkSt5mXWYUYnyk4aStJs8M/vtRtjpyE4OB5RPcpZRUZkTQhN7dwHRX0KlqO0dpYvBP9PaEmREcEA39O48YSplbR9Ao4qNwftNaCyWlbkitBMGHwSlHYK//Te7Ov4Uez9q1pCxvrlHCcYWkoW+bQJL7WQzyg97fuP4IvnUdsvoBY+SNhPN2LsVAAAAAElFTkSuQmCC"
          alt=""
          class="down_icon"
          style="display: none"
        /><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAALNJREFUOE/t0rEKwjAQBuD/iAXHCj6DLxaEFjdd3Kybi27SgvTFfAbBjEINJ1E01bQ9h47NesnH5b8j9HSoJwcDJCcZZDRd3GbWKn0tRmuA+JtgmiT3nVK2vBzH53otgOK0WgLYA1SaXM09xhSn9gSwBrAyeXTohFwxTqoNCJnHgA/CyEwRbX8/2zr+OvZ6xBotiKt27pHHnNPcybszcSGfGICm74gZycMOb4gd/YsOkJzUA4NBORPscF1AAAAAAElFTkSuQmCC"
          alt=""
          class="down_icon"
          style="display: none"
        /><!---->
      </div>
      <div
        class="tabs_box_item"
        :class="{ tabs_box_item_atcive: tabIndex === 2 }"
        @click="handleSelectTab(2)"
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAl5JREFUOE+dlE1IVFEUx///O0/NcCFGX4ogglFIHzIfMjgvzVVCZuk8yaRF0LZWQbQJWkWLaNG6nYb4piyjj00lM5OS7w0WGC0EF5lSSNKiEvS9d+JJE2O9GaG7uYvzv797zv/cc4ktVotu7PQlMxlzuZSUW3AY0Y13vsbOmIcBSDF9SVBE7+8DJOUfFpH+XDZl/h8oYcwA2EbCE8AtlVXRjKLt/d3iyTjBcyJwQbkHMGlnRu8HZVUIYmtHb50jWhNdaQJxCUCFvQf7YTZLJDH7HiRBue2BcyGE5qz0yKe8bwzrvXuB0GMCBwBsL7jth4icz/sS0ZM9AIcAVBVofgrwAXC72Rw3aio1WAAaIbgrIQ5rdObeTDxYDOgS43Gjdk25+5RSZwW8AGB+1UF0o7To0Z56T8pfUrCLSrqsdGqy1LOItRtxz8MzAZYV1zqt9KOFPx61tJ2sDbHiBYg6kies9Gg6CBZrT+qexycAllwv1DnzemTJ123qWmvrwG633HkFoNbOmNVBoLBurFDwhRqOWRPm57zmn/aH9eQQBQk7m2oIAkV0Y56CKStrDhbGg0D+SHzMZVLdG/4ljOP+bmXN5/4eSRjjIBrsjHmoKCgcDpexsvG7kLfgyVMq3ACQ+H0gKx6uUrELIpdldb4ql8utB5YWbetrFqVmASwAqBdiUQmviwhF4RoFdfkYXOegPTnmazfWptIKhnQFkJtlDu9MTZmrvjAeNyrXNbkI8AqAmr/HZRMoFju9wytXZxzNHX478fBbkNlHOk5Va05oUK15I9PTY1+Ldm2L/6lo+BcnNem5TExPfwAAAABJRU5ErkJggg=="
          alt=""
          class="optional_icon"
          style="display: none"
        />
        OTC
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAKFJREFUOE/t0z0SgjAQhuF3L+OVoIKC8QJJYyd2NskFHApSkSt5mXWYUYnyk4aStJs8M/vtRtjpyE4OB5RPcpZRUZkTQhN7dwHRX0KlqO0dpYvBP9PaEmREcEA39O48YSplbR9Ao4qNwftNaCyWlbkitBMGHwSlHYK//Te7Ov4Uez9q1pCxvrlHCcYWkoW+bQJL7WQzyg97fuP4IvnUdsvoBY+SNhPN2LsVAAAAAElFTkSuQmCC"
          alt=""
          class="down_icon"
          style="display: none"
        /><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAALNJREFUOE/t0rEKwjAQBuD/iAXHCj6DLxaEFjdd3Kybi27SgvTFfAbBjEINJ1E01bQ9h47NesnH5b8j9HSoJwcDJCcZZDRd3GbWKn0tRmuA+JtgmiT3nVK2vBzH53otgOK0WgLYA1SaXM09xhSn9gSwBrAyeXTohFwxTqoNCJnHgA/CyEwRbX8/2zr+OvZ6xBotiKt27pHHnNPcybszcSGfGICm74gZycMOb4gd/YsOkJzUA4NBORPscF1AAAAAAElFTkSuQmCC"
          alt=""
          class="down_icon"
          style="display: none"
        /><!---->
      </div>
    </div>
    <div class="tabs_box_right">
      <div class="ml16">
        <el-dropdown>
          <span class="el-dropdown-link">
            国家/地区<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>马耳他</el-dropdown-item>
            <el-dropdown-item>塞舌尔</el-dropdown-item>
            <el-dropdown-item>中国香港</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="ml16">
        <el-dropdown>
          <span class="el-dropdown-link">
            交易类型<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>所有</el-dropdown-item>
            <el-dropdown-item>现货</el-dropdown-item>
            <el-dropdown-item>期货</el-dropdown-item>
            <el-dropdown-item>法币</el-dropdown-item>
            <el-dropdown-item>场外</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
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
<style lang="less">
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
.tabs_box .tabs_box_item:first-child {
  position: relative;
  margin-right: 33px;
  color: #101b37;
}
.tabs_box .tabs_box_item {
  display: flex;
  align-items: center;
  margin-right: 16px;
  padding: 7px 16px;
  background: #f3f3f5;
  border-radius: 8px;
  font-size: 16px;
  color: #585f72;
  font-weight: 700;
  cursor: pointer;
  position: relative;
}
.tabs_box .tabs_box_item img {
  width: 18px;
  height: 18px;
}
.tabs_box .tabs_box_item:hover {
  color: #1069fb;
  font-weight: 700;
}
.tabs_box .tabs_box_item:first-child:after {
  content: " ";
  height: 30px;
  border-left: 1px solid #dbdde1;
  position: absolute;
  right: -16px;
}
.tabs_box .tabs_box_item_atcive {
  background: rgba(16, 105, 251, 0.1);
  color: #1069fb;
}
.tabs_box .tabs_box_item .tabs_box_select {
  display: none;
  position: absolute;
  padding: 8px 0;
  z-index: 99;
  background: #fff;
  box-shadow: 0 2px 8px 0 hsl(225deg 9% 74% / 20%);
  border: 1px solid #f9f9fa;
  top: 38px;
  left: 0;
}
.tabs_box .tabs_box_item .select_item_atcive {
  color: #1069fb;
  font-weight: 700;
}
.tabs_box .tabs_box_item .tabs_box_select_item {
  padding-left: 20px;
  box-sizing: border-box;
  width: 240px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #101b37;
}
.tabs_box .tabs_box_right {
  display: flex;
  align-items: center;
}
.ml16 {
  margin-left: 16px;
}
</style>
