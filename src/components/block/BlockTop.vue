<template>
  <div class="block_top">
    <div class="dataDetail_box">
      <div class="dataDetail_item">
        <div class="dataDetail_item_title">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAVFJREFUOE+dk7FLw0AUxr93iUGxtqmii6CLq7gJ9X9wdlDESdLo1MnBChbExcHFREFEEDfRv0LR1VERUbqIQxOxUHuXPklVqG0a2t503Pfd7/G+d0eIWWlbzQdce/9wjdt2NmonmNkgB9T2mCEhaNF39IsobyQgZckNIuw2XAggeNU7ME6aIS0A05J5EAot1RgMEjnP1fYbtX8AMyu3AGzH5UIkNkuOtvPnaQKoF4An4gAAvXquPhkJwAr3D6aQCsW+KjKAuvo1XkpDt8N92YePU6pEAxpKJ63qrCC6qx8RnXuOvtTxFEJjev1rmgNx3zMgaVemBGuPPQNGLB4PSBV7BiQsHtNJvf30zWeeayx3lcHQGme0mrqpZ8jCKh1qR10BTFsWwMgD9OR9ajM4o3LHgFGbE5KDBwYXIdWCfzzw3NVvHLZ5jqFEydGvwwbiXuY3JZt5EbYo37gAAAAASUVORK5CYII="
            alt=""
          />
          <p>领涨币种</p>
        </div>
        <div class="dataDetail_item_table">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="rank" label="#" width="50">
            </el-table-column>
            <el-table-column label="名称" width="125">
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
            <el-table-column prop="price" label="24H涨幅" width="125">
            </el-table-column>

            <el-table-column prop="concept" label="概念" width="55">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="dataDetail_item">
        <div class="dataDetail_item_title">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAVFJREFUOE+dk7FLw0AUxr93iUGxtqmii6CLq7gJ9X9wdlDESdLo1MnBChbExcHFREFEEDfRv0LR1VERUbqIQxOxUHuXPklVqG0a2t503Pfd7/G+d0eIWWlbzQdce/9wjdt2NmonmNkgB9T2mCEhaNF39IsobyQgZckNIuw2XAggeNU7ME6aIS0A05J5EAot1RgMEjnP1fYbtX8AMyu3AGzH5UIkNkuOtvPnaQKoF4An4gAAvXquPhkJwAr3D6aQCsW+KjKAuvo1XkpDt8N92YePU6pEAxpKJ63qrCC6qx8RnXuOvtTxFEJjev1rmgNx3zMgaVemBGuPPQNGLB4PSBV7BiQsHtNJvf30zWeeayx3lcHQGme0mrqpZ8jCKh1qR10BTFsWwMgD9OR9ajM4o3LHgFGbE5KDBwYXIdWCfzzw3NVvHLZ5jqFEydGvwwbiXuY3JZt5EbYo37gAAAAASUVORK5CYII="
            alt=""
          />
          <p>领涨币种</p>
        </div>
        <div class="dataDetail_item_table">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="rank" label="#" width="50">
            </el-table-column>
            <el-table-column label="名称" width="125">
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
            <el-table-column prop="price" label="24H涨幅" width="125">
            </el-table-column>

            <el-table-column prop="concept" label="概念" width="55">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="dataDetail_item">
        <div class="dataDetail_item_title">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAXpJREFUOE+d000rRFEYB/D//84dsuF42SDZSFkp2Vl62VhRilCW7lXiI/gQ7tiOl52XjWxkNSnCR7CQWGjiDkm6d+ave2OaZozBWZ3ueZ7fec65zyFqDOMEJwCSsKx9FV7SuZR5Kk1heX7TkkZZyM8CePZT9rJxgwsIg59xWZIrT56985VXBBoW1Vlv5dOQhqNFkUc5zx4vAwBQkNb8jeRaFBcDLa66CgoyALu/5OpAnCYS81EljPYyTj4DaKj0OD8DcWRWeO2lccNJSHvld/ELALCsVRo32Icw8S8AyNA44R2gjqqAE26C6vv2bwvPNIvBO4i6akCtPokquAfUXgGADyAuqwEUrqM+oXGCQwDjtXaqXGfaT9kLbHbCOUFbfwVkYSy3njwmppQwbeEVgP5fI+SJ79kjxU5sdNVjKTwD0Fob0c27kkNvG7wrAtHkE9n9uRKeWkzMPHq8rXhM8YcpJZrb8jOCpgEOQGoFmQV1DnDb9xIH8WMqGR8XRK7ZkwbIxwAAAABJRU5ErkJggg=="
            alt=""
          />
          <p>概念市值占比</p>
        </div>
        <div class="detaDetail_item_percent">
          <div class="percent_box">
            <div
              id="echar_percent"
              class="percent_box_echar"
              style="
                user-select: none;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                position: relative;
              "
              _echarts_instance_="ec_1669262336458"
            >
              <div
                style="
                  position: relative;
                  width: 180px;
                  height: 180px;
                  padding: 0px;
                  margin: 0px;
                  border-width: 0px;
                  cursor: default;
                "
              >
                <canvas
                  data-zr-dom-id="zr_0"
                  width="247"
                  height="247"
                  style="
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    width: 180px;
                    height: 180px;
                    user-select: none;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    padding: 0px;
                    margin: 0px;
                    border-width: 0px;
                  "
                ></canvas>
              </div>
              <div
                class=""
                style="
                  position: absolute;
                  display: block;
                  border-style: solid;
                  white-space: nowrap;
                  z-index: 9999999;
                  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 10px;
                  transition: opacity 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s,
                    visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s,
                    transform 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s;
                  background-color: rgb(255, 255, 255);
                  border-width: 1px;
                  border-radius: 4px;
                  color: rgb(102, 102, 102);
                  font: 14px / 21px 'Microsoft YaHei';
                  padding: 10px;
                  top: 0px;
                  left: 0px;
                  transform: translate3d(38px, 56px, 0px);
                  border-color: rgb(255, 138, 52);
                  pointer-events: none;
                  visibility: hidden;
                  opacity: 0;
                "
              >
                概念市值占比<br />其他:44.59%
              </div>
            </div>
          </div>
          <div class="detaDetail_item_color">
            <div class="color_item">
              <div class="color_box color_box_0"></div>
              <div class="color_name">Coinbase Pro综合</div>
              <div class="color_radio">12.53%</div>
            </div>
            <div class="color_item">
              <div class="color_box color_box_1"></div>
              <div class="color_name">CoinList 上线</div>
              <div class="color_radio">12.02%</div>
            </div>
            <div class="color_item">
              <div class="color_box color_box_2"></div>
              <div class="color_name">公链</div>
              <div class="color_radio">10.62%</div>
            </div>
            <div class="color_item">
              <div class="color_box color_box_3"></div>
              <div class="color_name">Robinhood 上线</div>
              <div class="color_radio">10.32%</div>
            </div>
            <div class="color_item">
              <div class="color_box color_box_4"></div>
              <div class="color_name">灰度信托基金</div>
              <div class="color_radio">9.92%</div>
            </div>
            <div class="color_item">
              <div class="color_box color_box_5"></div>
              <div class="color_name">其他</div>
              <div class="color_radio">44.59%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blockTop",
  data() {
    return {
      tableData: [
        {
          rank: "01",
          name: "KRAUSE",
          img: "https://s2.gongft.com/logo/1/krause.png?x-oss-process=style/coin_36&v=1638236423",
          price: "+103.61%",
          concept: "DAO",
        },
        {
          rank: "02",
          name: "KRAUSE",
          img: "https://s2.gongft.com/logo/1/krause.png?x-oss-process=style/coin_36&v=1638236423",
          price: "+103.61%",
          concept: "DAO",
        },
        {
          rank: "03",
          name: "KRAUSE",
          img: "https://s2.gongft.com/logo/1/krause.png?x-oss-process=style/coin_36&v=1638236423",
          price: "+103.61%",
          concept: "DAO",
        },
        {
          rank: "04",
          name: "KRAUSE",
          img: "https://s2.gongft.com/logo/1/krause.png?x-oss-process=style/coin_36&v=1638236423",
          price: "+103.61%",
          concept: "DAO",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="less">
.block_top {
  width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
}
.dataDetail_box {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
}
.dataDetail_box .dataDetail_item {
  padding: 20px 0;
  width: 390px;
  height: 312px;
  background: #fff;
  box-shadow: 0 2px 8px 0 hsl(225deg 9% 74% / 20%);
  border-radius: 8px;
  border: 1px solid #f9f9fa;
  box-sizing: border-box;
}
.dataDetail_box .dataDetail_item_title {
  display: flex;
  align-items: center;
  padding: 0 16px;
}
.dataDetail_box .dataDetail_item_title img {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}
.dataDetail_box .dataDetail_item_title p {
  font-size: 16px;
  color: #101b37;
  line-height: 22px;
  font-weight: 600;
}
.dataDetail_box .dataDetail_item_table {
  margin-top: 10px;
}
.dataDetail_box .dataDetail_item_table .table_box_coin {
  display: flex;
  align-items: center;
}
.dataDetail_box .dataDetail_item_table .table_box_coin .table_coin_img {
  width: 24px;
  height: 24px;
}
.dataDetail_box .dataDetail_item_table .table_box_coin .table_coin_img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.dataDetail_box .dataDetail_item_table .table_box_coin .table_coin_info {
  margin-left: 9px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dataDetail_box
  .dataDetail_item_table
  .table_box_coin
  .table_coin_info
  .table_coin_name,
.dataDetail_box .dataDetail_item_table .table_box_gnName {
  font-size: 14px;
  color: #101b37;
  line-height: 22px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dataDetail_box .detaDetail_item_percent {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  margin-left: 20px;
  margin-right: 20px;
}
.dataDetail_box .detaDetail_item_percent .color_item {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.dataDetail_box .detaDetail_item_percent .color_item .color_box.color_box_0 {
  background: #1069fb;
}
.dataDetail_box .detaDetail_item_percent .color_item .color_box {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.dataDetail_box .detaDetail_item_percent .color_item .color_name {
  margin-left: 4px;
  width: 82px;
  font-size: 12px;
  color: #585f72;
  line-height: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.dataDetail_box .detaDetail_item_percent .color_item .color_radio {
  margin-left: 4px;
  font-size: 12px;
  font-weight: 500;
  color: #101b37;
  line-height: 16px;
}
.dataDetail_box .detaDetail_item_percent .color_item .color_box.color_box_1 {
  background: #18b5d0;
}
.dataDetail_box .detaDetail_item_percent .color_item .color_box.color_box_2 {
  background: #21bb5e;
}
.dataDetail_box .detaDetail_item_percent .color_item .color_box.color_box_3 {
  background: #a0c829;
}
.dataDetail_box .detaDetail_item_percent .color_item .color_box.color_box_4 {
  background: #fec710;
}
.dataDetail_box .detaDetail_item_percent .color_item .color_box.color_box_5 {
  background: #ff8a34;
}
</style>
