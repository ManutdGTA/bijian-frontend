<template>
  <div>
    <TopBanner :tabIndex="0"></TopBanner>
    <div class="platformDetail">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/platform' }"
          >平台</el-breadcrumb-item
        >
        <span>币安网</span>
      </el-breadcrumb>
      <div class="details_box">
        <div class="details_head">
          <div class="details_head_left">
            <img src="@/assets/bitcoin.webp" alt="" />
            <div class="details_head_name">
              <div class="head_top">
                <p class="head_name">币安网</p>
                <div class="head_top_rank">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAL5JREFUKFON0D0OAXEQBfD3iM9EYnEHJxCdUiXhHDqrpKXc7ZxjC5VOiwM4BJaExEf8n/wlm2C3MOXkN28mQ/xZtO42cHYiqkkzFPY5P6y94dV1FCFCGwAS2Ih6eS/kJ7wQ2IKaWiBxDKEOovgFCZyN1Cn4x6WFj2G5ZcS5gNJvIgStCt6x+b7bLa+i9TEIICB5AoyRWAHQtUNJMPFZMUhonU5hYvXTYBRbfXedGcUg4x8Wn5GPQaUtqpf1wv4LvDJaCwaVDtAAAAAASUVORK5CYII="
                    alt=""
                  /><span>No.1</span>
                </div>
                <div class="head_top_exrank">
                  <p class="head_top_exrank_title">ExRank</p>
                  <div class="progress_box">
                    <div
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      class="el-progress el-progress--line el-progress--without-text"
                    >
                      <div class="el-progress-bar">
                        <div class="el-progress-bar__outer" style="height: 6px">
                          <div
                            class="el-progress-bar__inner"
                            style="
                              width: 90%;
                              background-color: rgb(22, 176, 86);
                            "
                          >
                            <!---->
                          </div>
                        </div>
                      </div>
                      <!---->
                    </div>
                  </div>
                  <div>9</div>
                </div>
              </div>
              <div class="head_vol_box">
                <p class="head_vol">24H成交额</p>
                <p class="head_vol_num">¥ 308.01亿</p>
              </div>
            </div>
          </div>
          <div class="details_head_right">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAKZJREFUOE+10k0KwjAQBeA3CWlwbXoQ1x5HWj1A6yHauvEHxet4AC/SHKAUfdKFClIpKZrdBL6ZeTBCUmPEk5/DNosXEEamrI99C32d2GRuK+AkqnwSBnO3E9JGlU//A9u1S+83zt7dORdAEXJ5/iktV1PU565+ZeyDABSG4GeOJnN7CI0t/TIsYwdJYzehMJ8eQGhb+VXgxDiBorZFfQqCQ+c7+lYf5/JqDxBfapoAAAAASUVORK5CYII="
              alt=""
            />关注
          </div>
        </div>
        <div class="details_info">
          <div class="details_info_left">
            <p>链接</p>
            <div class="line_box">
              <div class="line_item">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAaBJREFUOE+tkzFoFFEYhL/ZO8RKbMRYaGMgKcTSqBiQaBFtxMJDsBPBRnIXxcrd9dxdK9HcBhtB7AQ5C7FRCw1CRI2lWCQQGy2M2IiVyN2O7MWIBA3C5RWvePO/+efN+0f8Y4Vpa0hmpIQt5rKosfC3Uv152G63K+8Wls4U9kVg56oL7wPp2q6hgdu1Wq27gv0maDanNneCyn3wqNAb41EHwcmyUEVxT2jWeA9otlp0TzSbk197WLmVnd/OLz0BHxa6Y7xJsCWN6wdLPEry54YvQt+MT4Oe7h4eGC+V9AjidPpsYeeBuNE1DWBjADNWcLfXxcWpAsaA7xXRKsz5QKon0cStHkGY5IuYR9nl+kSU3Nxnui+FFi1vXSbQZ+NBUdmfxudehVfyacTRLK4PqnQba154bxo35sJ0agwHzxx0dlwNL3wsCS5l17erqH5AxaEsmpyJktaI0WvkYYVpPo55LHho6Qd4G+aA4IGlzrICVw3HES9An2RvMBxDHFkPgj6fsKaJ/DKRNUxcl2/se5BKFX2N8kow+grT6qj+b5x/AtE6MjxG8U2sAAAAAElFTkSuQmCC"
                  class="line_item_icon"
                /><a
                  href="https://accounts.bitechan.info/zh-CN/register?ref=186288211"
                  target="_blank"
                  class="line"
                  >https://accounts.bitechan.info/zh-CN/register?ref=186288211</a
                >
              </div>
              <div class="line_item">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAaBJREFUOE+tkzFoFFEYhL/ZO8RKbMRYaGMgKcTSqBiQaBFtxMJDsBPBRnIXxcrd9dxdK9HcBhtB7AQ5C7FRCw1CRI2lWCQQGy2M2IiVyN2O7MWIBA3C5RWvePO/+efN+0f8Y4Vpa0hmpIQt5rKosfC3Uv152G63K+8Wls4U9kVg56oL7wPp2q6hgdu1Wq27gv0maDanNneCyn3wqNAb41EHwcmyUEVxT2jWeA9otlp0TzSbk197WLmVnd/OLz0BHxa6Y7xJsCWN6wdLPEry54YvQt+MT4Oe7h4eGC+V9AjidPpsYeeBuNE1DWBjADNWcLfXxcWpAsaA7xXRKsz5QKon0cStHkGY5IuYR9nl+kSU3Nxnui+FFi1vXSbQZ+NBUdmfxudehVfyacTRLK4PqnQba154bxo35sJ0agwHzxx0dlwNL3wsCS5l17erqH5AxaEsmpyJktaI0WvkYYVpPo55LHho6Qd4G+aA4IGlzrICVw3HES9An2RvMBxDHFkPgj6fsKaJ/DKRNUxcl2/se5BKFX2N8kow+grT6qj+b5x/AtE6MjxG8U2sAAAAAElFTkSuQmCC"
                  class="line_item_icon"
                /><a
                  href="https://accounts.bitechan.org/zh-CN/register?ref=186288211"
                  target="_blank"
                  class="line line_02"
                  >https://accounts.bitechan.org/zh-CN/register?ref=186288211</a
                ><a
                  href="https://accounts.binance.com/zh-CN/register?ref=186288211"
                  target="_blank"
                  class="alternative"
                  >备选链</a
                >
              </div>
              <div class="line_item">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAATRJREFUOE+lkz9Lw1AUxc95qW7uOoijmx9AXDs4iUMEoX6FBumg0KRikiIOIvErKAhmECcHVxFnNxdBHHTv1ja58kxb849WTJbHvffl9865l0uUfG3/bFmnu3brQ5/5OP0LywC2F1zpvO9YDX3m41JA2w+2GOMSwEIZNJXricJe17budG6iwHaDa4ArIvE5FbZ1UWLc/lxKxaTaB+Td71i7WYB3cZPIbu5MU2Dn7v0qGBVq0WJjwM9NQOazIPbnZOl+aHyN+pM8VABQ5FQgTwBzAOkTXBfyIK20AKhsQThoUWonaQUKeHOd5mEy0myvCgoqAypbyDdREZ7rWJ3xRGZaKIzRiJ7HO/GnHvzfwnHggnBm7EFSFnj+UWJrMgXTNI3VtY26xDJ1majYe315fAjDMNKAbxotrBHXR9oGAAAAAElFTkSuQmCC"
                  class="line_item_icon"
                /><a
                  href="https://www.binance.com/cn/fee/schedule"
                  target="_blank"
                  class="line"
                  >手续费用</a
                >
              </div>
              <div class="line_item">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAPFJREFUOE9jZKAQMFKonwGvATXNk1Yx/P//v6UuPxyXRaMGMGAGYkPDJL6/TAz1X3j+1HB/ZVkICsSvPH8TeL6wtDD/Y2hsaMj7hByg4ECsaZq4EkSDQruybZIW85//B/8zMFxkYmD48p+B8f9/hv+8jAwM+n9ZGO3bq/KugWMHpL42LwxiAJIAiF/bNEn/P8P/PQyMDPxg2/4zfGRkYHRprsu7iK4eqwFIhuwDsRkZGJ1gmok2AKSwvmOCHIhurCh4hOxvgl4glLyxG/CfwYKBkeEEIc3QMAGrRQrEyQEMDP+jiNIMV8S4rKU2dwPFuREAWv+OEdj+xq0AAAAASUVORK5CYII="
                  class="line_item_icon"
                /><a href="/" target="_blank" class="line">应用下载</a>
              </div>
            </div>
          </div>
          <div class="details_info_right">
            <div class="info_right_content">
              币安(Binance)，国际领先的区块链数字资产国际站，向全球提供广泛的数字货币交易、区块链教育、区块链项目孵化、区块链资产发行平台、区块链研究院以及区块链公益慈善等服务，目前用户覆盖全球180多个国家和地区，以140万单/秒的核心内存撮合技术，是全球加密货币交易速度最快的平台之一，也是全球加密货币交易量最大的平台之一。币安始终坚持将用户利益放在第一位，致力于提供安...
              <div>
                阅读更多
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAALdJREFUOE9jZKASYKSSOQxDyCCR7B9qv/+y6H6cwbKWGO/j9Bp/5p+ljAz/wxiZGGPfT2VZQcgw3GGU9p9LgPnPFgYGBltiDMMf2CQYRjjWiDSMsEEM/xkFMv/OZWD4n8jAyFT3YRpzM7bwImAQ2JDZDAz/kxn+MzR8mMHaiCvQ8RhEvCEgw3EaJJD1ZzLD//85hFwCcyFug3L+OzD+/WP1fjprG6E0hNdFxGhGVkNErBFn5OAzCADbEkMTlrbgGAAAAABJRU5ErkJggg=="
                  alt=""
                />
              </div>
            </div>
            <div class="info_right_data">
              <div class="info_data_box">
                <div class="info_data_item">
                  <p class="info_item_key">成立时间</p>
                  <p class="info_item_val">2017-07</p>
                </div>
                <div class="info_data_item">
                  <p class="info_item_key">注册地区</p>
                  <p class="info_item_val">马耳他</p>
                </div>
                <div class="info_data_item">
                  <p class="info_item_key">KYC认证</p>
                  <p class="info_item_val">是</p>
                </div>
                <div class="info_data_item" style="align-items: flex-start">
                  <p class="info_item_key">交易支持</p>
                  <div class="info_item_support">
                    <div class="support_item">法币</div>
                    <div class="support_item">期货</div>
                    <div class="support_item">场外</div>
                    <div class="support_item">支付宝</div>
                    <div class="support_item">银行支付</div>
                    <div class="support_item">微信支付</div>
                    <div class="support_item">现货</div>
                  </div>
                </div>
              </div>
              <div class="info_data_box">
                <div class="info_data_item">
                  <p class="info_item_key">资产实力</p>
                  <p class="info_item_val">¥3057.5亿</p>
                </div>
                <div class="info_data_item">
                  <p class="info_item_key">币种数量</p>
                  <p class="info_item_val">352(1587个交易对)</p>
                </div>
                <div class="info_data_item">
                  <p class="info_item_key">支持中文</p>
                  <p class="info_item_val">是</p>
                </div>
              </div>
              <div class="info_data_box">
                <div class="info_data_item">
                  <p class="info_item_key">风险准备金</p>
                  <p class="info_item_val">¥36.68亿</p>
                </div>
                <div class="info_data_item">
                  <p class="info_item_key">量比接口</p>
                  <p class="info_item_val">是</p>
                </div>
                <div class="info_data_item">
                  <p class="info_item_key">人气指数</p>
                  <div class="table_item">
                    <div
                      role="slider"
                      aria-valuenow="4.39"
                      aria-valuetext=""
                      aria-valuemin="0"
                      aria-valuemax="5"
                      tabindex="0"
                      class="el-rate"
                    >
                      <span class="el-rate__item" style="cursor: auto"
                        ><i
                          class="el-rate__icon el-icon-user-solid"
                          style="color: rgb(247, 186, 42)"
                          ><!----></i
                        ></span
                      ><span class="el-rate__item" style="cursor: auto"
                        ><i
                          class="el-rate__icon el-icon-user-solid"
                          style="color: rgb(247, 186, 42)"
                          ><!----></i
                        ></span
                      ><span class="el-rate__item" style="cursor: auto"
                        ><i
                          class="el-rate__icon el-icon-user-solid"
                          style="color: rgb(247, 186, 42)"
                          ><!----></i
                        ></span
                      ><span class="el-rate__item" style="cursor: auto"
                        ><i
                          class="el-rate__icon el-icon-user-solid"
                          style="color: rgb(247, 186, 42)"
                          ><!----></i
                        ></span
                      ><span class="el-rate__item" style="cursor: auto"
                        ><i
                          class="el-rate__icon el-icon-user-solid"
                          style="color: rgb(239, 242, 247)"
                          ><i
                            class="el-rate__decimal el-icon-user-solid"
                            style="color: rgb(247, 186, 42); width: 39%"
                          ></i></i></span
                      ><!---->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="details_echarts">
          <p class="details_echarts_title">币安网行情</p>
          <div class="details_echarts_tab">
            <div class="echarts_tab_item select">成交额</div>
            <div class="echarts_tab_item">交易所资产</div>
            <div class="echarts_tab_item">风险准备金</div>
          </div>
          <br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      </div>
    </div>
    <BottomPage></BottomPage>
  </div>
</template>

<script>
import TopBanner from "@/components/TopBanner.vue";
import BottomPage from "@/components/BottomPage.vue";

export default {
  name: "platformDetail",
  components: {
    TopBanner,
    BottomPage,
  },
};
</script>

<style lang="less">
.platformDetail {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  .details_box .details_head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
  }
  .details_box .details_head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
  }
  .details_box .details_head_left img {
    border-radius: 50%;
    width: 36px;
    height: 36px;
  }
  .details_box .details_head_left .details_head_name {
    margin-left: 16px;
  }
  .details_box .details_head_left .head_top {
    display: flex;
    align-items: center;
  }
  .details_box .details_head_left .head_top .head_name {
    font-size: 24px;
    color: #101b37;
    line-height: 32px;
    font-weight: 600;
  }
  .details_box .details_head_left .head_top .head_top_rank {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px 8px;
    margin-left: 16px;
    background: rgba(248, 114, 17, 0.08);
    border-radius: 10px;
  }
  .details_box .details_head_left .head_top .head_top_rank img {
    width: 10px;
    height: 10px;
  }
  .details_box .details_head_left .head_top .head_top_rank span {
    margin-left: 1px;
    font-size: 10px;
    font-weight: 500;
    color: #f87211;
    line-height: 13px;
  }
  .details_box .details_head_left .head_top .head_top_exrank {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .details_box
    .details_head_left
    .head_top
    .head_top_exrank
    .head_top_exrank_title {
    font-size: 12px;
    color: #101b37;
    line-height: 17px;
  }
  .details_box .details_head_left .head_top .head_top_exrank .progress_box {
    width: 45px;
    margin-left: 4px;
    margin-right: 15px;
  }
  .details_box .details_head_left .head_top .head_top_exrank div {
    font-size: 14px;
    color: #101b37;
    line-height: 20px;
  }
  .details_box .details_head_left {
    display: flex;
    align-items: center;
  }
  .details_box .details_head_left .head_vol_box {
    display: flex;
    align-items: center;
    margin-top: 6px;
  }
  .details_box .details_head_left .head_vol_box .head_vol {
    font-size: 14px;
    color: #343d55;
    line-height: 20px;
  }
  .details_box .details_head_left .head_vol_box .head_vol_num {
    margin-left: 8px;
    font-size: 18px;
    color: #101b37;
    line-height: 25px;
    font-weight: 600;
  }
  .details_box .details_head_right {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 66px;
    height: 24px;
    background: #fff;
    border-radius: 15px;
    border: 1px solid #f87211;
    font-size: 12px;
    color: #f87211;
    cursor: pointer;
  }
  .details_box .details_info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
  }
  .details_box .details_info .details_info_left {
    margin-right: 38px;
  }
  .details_box .details_info .details_info_left p {
    font-size: 14px;
    color: #343d55;
    line-height: 20px;
  }
  .details_box .details_info .details_info_left .line_box {
    margin-top: 10px;
  }
  .details_box .details_info .details_info_left .line_item {
    display: flex;
    align-items: center;
    width: 280px;
    height: 36px;
    background: #f9f9fa;
    border-radius: 8px;
    margin-bottom: 8px;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .details_box .details_info .details_info_left .line_item .line_item_icon {
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
  .details_box .details_info .details_info_left .line_item .line {
    width: 220px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: #343d55;
    line-height: 20px;
  }
  .details_box .details_info .details_info_right {
    width: 100%;
  }
  .details_box .details_info .details_info_right .info_right_content {
    height: 60px;
    font-size: 14px;
    color: #343d55;
    line-height: 20px;
  }
  .details_box .details_info .details_info_right .info_right_content div {
    display: inline-block;
    color: #1069fb;
    cursor: pointer;
  }
  .details_box .details_info .details_info_right .info_right_data {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .details_box .details_info .details_info_right .info_data_box {
    position: relative;
    width: 240px;
  }
  .details_box .details_info .details_info_right .info_data_item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 28px;
  }
  .details_box
    .details_info
    .details_info_right
    .info_data_item
    .info_item_key {
    font-size: 14px;
    color: #7c8291;
    line-height: 20px;
  }
  .details_box
    .details_info
    .details_info_right
    .info_data_item
    .info_item_val {
    font-size: 14px;
    color: #101b37;
    line-height: 20px;
  }
  .details_box
    .details_info
    .details_info_right
    .info_data_item
    .info_item_support
    .support_item {
    margin-left: 5px;
    margin-bottom: 8px;
    display: inline-block;
    padding: 2px 4px;
    border-radius: 4px;
    border: 1px solid #1069fb;
    font-size: 12px;
    color: #1069fb;
    line-height: 17px;
  }
  .details_box .details_info .details_info_left .line_item .alternative {
    font-size: 12px;
    color: #1069fb;
    line-height: 17px;
  }
  .details_box .details_echarts {
    margin-top: 40px;
    margin-bottom: 16px;
    padding-bottom: 40px;
    width: 1200px;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #f3f3f5;
  }
  .details_box .details_echarts .details_echarts_title {
    padding: 20px 16px 16px;
    font-size: 16px;
    font-family: AlibabaPuHuiTi_2_85_Bold;
    color: #101b37;
    line-height: 22px;
    font-weight: 600;
  }
  .details_box .details_echarts .details_echarts_tab {
    display: flex;
    align-items: center;
    padding-left: 16px;
  }
  .details_box .details_echarts .details_echarts_tab .echarts_tab_item.select {
    color: #1069fb;
    border: 1px solid #1069fb;
  }
  .details_box .details_echarts .details_echarts_tab .echarts_tab_item {
    cursor: pointer;
    margin-right: 10px;
    padding: 4px 16px;
    border-radius: 4px;
    border: 1px solid #dbdde1;
    font-size: 12px;
    color: #7c8291;
  }
}
</style>
