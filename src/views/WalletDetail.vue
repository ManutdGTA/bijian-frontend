<template>
  <div>
    <TopBanner :tabIndex="0"></TopBanner>
    <div class="walletDetail">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/wallet' }">钱包</el-breadcrumb-item>
        <span>BTC</span>
      </el-breadcrumb>
      <div class="name_box">
        <div class="name_left">
          <img alt="" class="logo" src="@/assets/bitcoin.webp" />
          <div>
            <div class="name">imToken</div>
            <div class="name_score">综合评分 <span>80.2</span></div>
          </div>
        </div>
        <div class="collect addCollect"><span>+</span> 关注</div>
      </div>
      <div class="tagBox">
        <div>轻钱包</div>
        <div>多资产</div>
        <div>多链钱包</div>
        <div>硬件钱包</div>
      </div>
      <div class="intro_box">
        imToken是一款移动端轻钱包App，它旨在为普通用户提供一款安全放心、简单好用、功能强大的数字资产钱包应用。主要功能：1.私钥自持2.轻钱包功能3.支持多种数字资产4.关注全球各大交易所，各类数字
        <div>
          查看更多
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAALdJREFUOE9jZKASYKSSOQxDyCCR7B9qv/+y6H6cwbKWGO/j9Bp/5p+ljAz/wxiZGGPfT2VZQcgw3GGU9p9LgPnPFgYGBltiDMMf2CQYRjjWiDSMsEEM/xkFMv/OZWD4n8jAyFT3YRpzM7bwImAQ2JDZDAz/kxn+MzR8mMHaiCvQ8RhEvCEgw3EaJJD1ZzLD//85hFwCcyFug3L+OzD+/WP1fjprG6E0hNdFxGhGVkNErBFn5OAzCADbEkMTlrbgGAAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
      </div>
      <div class="infoBox">
        <div class="info_item">
          <div class="title">imToken基础信息</div>
          <div class="info_table">
            <div class="info_table_item">
              <div>成立时间</div>
              <div>2016-05-01</div>
            </div>
            <div class="info_table_item">
              <div>支持语言</div>
              <div>中文、英文</div>
            </div>
            <div class="info_table_item">
              <div>注册地</div>
              <div>中国</div>
            </div>
            <div class="info_table_item">
              <div>支持类型</div>
            </div>
            <div class="info_table_item">
              <div>支持Dapp</div>
              <!----><!----><!----><!---->
              <div>dapp浏览器</div>
            </div>
            <div class="info_table_item">
              <div>中心化程度</div>
              <!----><!---->
              <div>轻钱包</div>
              <!---->
            </div>
            <div class="info_table_item">
              <div>Dapp浏览器</div>
              <div>支持</div>
            </div>
            <div class="info_table_item">
              <div>金融服务</div>
              <div>
                <span>定期/活期理财</span
                ><!----><!----><!----><!----><!---->
              </div>
              <div>
                <!----><!----><!----><span>质押staking</span
                ><!----><!---->
              </div>
              <div><!----><!----><!----><!----><!----><span>闪兑</span></div>
              <!---->
            </div>
          </div>
        </div>
        <div class="info_item">
          <div class="title">imToken安全信息</div>
          <div class="info_table">
            <div class="info_table_item">
              <div>多重签名</div>
              <!----><!---->
              <div>支持</div>
            </div>
            <div class="info_table_item">
              <div>离线冷钱包</div>
              <!----><!---->
              <div>支持</div>
            </div>
            <div class="info_table_item">
              <div>多链钱包</div>
              <!---->
              <div>支持</div>
            </div>
            <div class="info_table_item">
              <div>钱包地址二维码</div>
              <!----><!---->
              <div>支持</div>
            </div>
            <div class="info_table_item">
              <div>矿工费调节</div>
              <!----><!---->
              <div>支持</div>
            </div>
            <div class="info_table_item">
              <div>代码开源</div>
              <!----><!----><!---->
              <div>完全开源</div>
            </div>
            <div class="info_table_item">
              <div>2FA认证</div>
              <!---->
              <div>不支持</div>
              <!---->
            </div>
            <div class="info_table_item">
              <div>安全审计</div>
              <div>慢雾科技</div>
              <!---->
            </div>
          </div>
        </div>
        <div class="info_item">
          <div class="title">imToken相关链接</div>
          <div class="info_table">
            <div class="info_table_item">
              <div>官网链接</div>
              <div>
                <a href="https://token.im">https://token.im</a>
              </div>
            </div>
            <div class="info_table_item">
              <div>白皮书</div>
              <div>--</div>
            </div>
            <div class="info_table_item">
              <div>备用链接</div>
              <div>--</div>
            </div>
            <div class="info_table_item">
              <div>应用下载</div>
              <div>
                <a href="https://token.im/download"
                  >https://token.im/download</a
                >
              </div>
            </div>
            <div class="info_table_item">
              <div>社交媒体</div>
              <div class="media">
                <!----><!----><!----><!----><a
                  href="https://twitter.com/imTokenOfficial"
                  ><img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA21JREFUWEftlk9oXFUYxc95MyEpoViE0jYoaqEY/FNBxFapVKQbLSqNOAU3JVA6EpsZxYXGzBtu5r1MaQLWvLEWF4r/kG6qVtGV2IWlKkgDFWwXRVBpbd2YWhUyeXOPTNpMk3Qm772k0E3f6sI93/l+997v3u8R1/njdc6PGwDXbAfMyP7VtWptl6RnKHQBtCCOks5HpcLuT2cftfGDB9esbB/PZrNTDYC6QThZ2+G7ub1J68J4lcdC2I8hrGoWS+JgymnbY+3UZonPAjrpFfPZurYBUPDGBiCUHWKo5OZNXAhTrnTXQo0L6ogTQ/BUR2rZo1PrbvrLZDLVWQDBQUjbL1ON3Nu95rVMJlOLMi14Y99C2BSlu+TLc3C4D9LdBL4vubkDDQC3FHwu6MkZI5LjKcfZaQZ3H29lbvZWusJJeyZO8jka4h3fze+ccwRuKdgn6MW5QtYcKGBbxxtDr2Z/m5+o4AU9kA4lAqBjfLd/qLHQmYHxg42h1XdNiwiwIr9xiPeczuVfmpd6J+q64nDlcVuzX8UGIC/4bm7FbP2ca+h6wSFJPZGGxHmKp0D9K+GJSP2Vc/3Vd3O3NwUoDgdb2yx/rkrvC3oktmkCIYEfvGJ+Y1OAgjf2LoUdAM8J6krgG1tK8jPPzW1rCuD6ledl7YHYbosQ0nFe8Qr9I00BgiBo//MCTkK6YxHesULSqbb7zGDfidZFWA42q6YvICyP5ZhERJzx3fwt80OuakZm+K31oZ36EML6JP5RWjoc9Aq5ciSAW35zA0KtA+1WgdshLbljEphIreBtJpf7OxLAlIO7aqF+EuBErSr2/LzXr2UNzEwUvbGSFdzYCRYSksfTd65+qN75mslabu90ewZcCMsWDUJcTKfT95uBF0638ljwfKe7XdX2EnxAwNNJ6oFAlQ4ypUL+8IIbFLU64489HApvQ7gnSjszT/CfFLHNuLmvo2Ka7sDo6AedFycnnpJVr8gtSVYO8vc02WMK/T9GJa/PTwNc+qfTLkKdELsBrU18C8hJCqOpVe17TDb7X5zkDYD6wPf331pV+LIFn4O0Mq4BiD8AfpJOp183A32/xI67LLz6JTxyJI2jJ7ZYOJsstIHSWgA3i+ykcF7EWQJnIZ52HOcwB/uOGdImTXylXhYbeY3ilvzMLpXjBsD/VSRDMISHbDoAAAAASUVORK5CYII="
                    alt=""
                    class="el-tooltip"
                    aria-describedby="el-tooltip-9950"
                    tabindex="0" /></a
                ><a href="https://www.weibo.com/imToken"
                  ><img
                    src="data:image/png;base64,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"
                    alt=""
                    class="el-tooltip"
                    aria-describedby="el-tooltip-899"
                    tabindex="0"
                /></a>
              </div>
            </div>
            <div class="info_table_item">
              <div>官方联系方式</div>
              <!---->
              <div>support@token.im</div>
            </div>
          </div>
        </div>
      </div>
      <div class="infoBox course_section">
        <div class="info_item">
          <div class="title">imToken发展历程和路线</div>
          <div class="course_box">
            <div class="course_list">
              <div class="list_dot"></div>
              <div class="list_date">2019年7月31日</div>
              <div class="list_cont">Tokenlon 正式上线</div>
            </div>
            <div class="course_list">
              <div class="list_dot"></div>
              <div class="list_date">2018年10月24日</div>
              <div class="list_cont">imToken 核心代码开源</div>
            </div>
            <div class="course_list">
              <div class="list_dot"></div>
              <div class="list_date">2018年7月31日</div>
              <div class="list_cont">imToken 2.0 正式发布</div>
            </div>
            <div class="course_list">
              <div class="list_dot"></div>
              <div class="list_date">2018年5月27日</div>
              <div class="list_cont">获 IDG 千万美金投资</div>
            </div>
            <div class="course_list">
              <div class="list_dot"></div>
              <div class="list_date">2018年2年14日</div>
              <div class="list_cont">imToken 用户数达百万</div>
            </div>
            <div class="course_list">
              <div class="list_dot"></div>
              <div class="list_date">2016年11年11日</div>
              <div class="list_cont">imToken 1.0 上线</div>
            </div>
            <div class="course_list">
              <div class="list_dot"></div>
              <div class="list_date">2016年5月</div>
              <div class="list_cont">公司成立</div>
            </div>
          </div>
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
  name: "walletDetail",
  components: {
    TopBanner,
    BottomPage,
  },
};
</script>

<style lang="less">
.walletDetail {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  .name_box .name_left,
  .name_box {
    display: flex;
    align-items: center;
  }

  .name_box .name_left,
  .name_box {
    display: flex;
    align-items: center;
  }
  .name_box .name_left .logo {
    width: 60px;
    height: 60px;
    margin-right: 16px;
  }
  .name_box .name_left .name {
    font-size: 24px;
    font-weight: 700;
  }
  .name_box .name_left .name_score {
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  .name_box .name_left .name_score span {
    font-size: 18px;
    margin-left: 5px;
    color: #f87211;
  }
  .name_box {
    margin: 20px 0;
    justify-content: space-between;
  }
  .name_box .collect {
    width: 66px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    background: #fff;
    border-radius: 15px;
    color: #7c8291;
    border: 1px solid #dbdde1;
    cursor: pointer;
  }
  .name_box .addCollect {
    color: #f87211;
    border: 1px solid #f87211;
  }
  .tagBox {
    display: flex;
    align-items: center;
  }
  .tagBox div {
    background: #f3f3f5;
    border-radius: 4px;
    padding: 0 12px;
    font-size: 12px;
    height: 24px;
    line-height: 24px;
    color: #7c8291;
    margin-right: 10px;
  }
  .intro_box {
    margin: 20px 0;
  }
  .intro_box div {
    display: inline-block;
    color: #1069fb;
    cursor: pointer;
  }
  .intro_box div img {
    display: inline-block;
    vertical-align: middle;
    margin-top: -3px;
    margin-left: -5px;
  }
  .infoBox {
    background: #fff;
    border-radius: 8px;
    border: 1px solid #f3f3f5;
    padding: 20px 16px;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
  .infoBox .info_item {
    margin-bottom: 40px;
  }
  .infoBox .info_item .title {
    font-size: 16px;
    font-weight: 700;
    color: #101b37;
    margin-bottom: 16px;
  }
  .info_table {
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #f3f3f5;
    border-left: 1px solid #f3f3f5;
  }
  .info_table .info_table_item {
    width: 47%;
    border-bottom: 1px solid #f3f3f5;
    border-right: 1px solid #f3f3f5;
    height: 40px;
    line-height: 40px;
    display: flex;
    align-items: center;
  }
  .info_table .info_table_item > div:first-child {
    width: 140px;
    height: 100%;
    background: #f9f9fa;
  }
  .info_table .info_table_item > div {
    padding-left: 16px;
    box-sizing: border-box;
  }
  .infoBox .info_item {
    margin-bottom: 40px;
  }
  .course_section {
    margin-bottom: 50px;
  }
  .infoBox .info_item:last-child {
    margin-bottom: 0;
  }
  .infoBox .info_item .title {
    font-size: 16px;
    font-weight: 700;
    color: #101b37;
    margin-bottom: 16px;
  }
  .course_box {
    max-height: 420px;
    overflow: hidden;
    overflow-y: scroll;
  }
  .course_box .course_list {
    padding: 15px 0 0 15px;
    box-sizing: border-box;
    border-left: 1px dashed #dbdde1;
    margin-top: 5px;
    margin-left: 5px;
    position: relative;
    font-size: 14px;
    display: flex;
  }
  .course_box .course_list .list_dot {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid #1069fb;
    left: -6px;
    top: 19px;
    background: #fff;
  }
  .course_box .course_list .list_date {
    color: #1069fb;
    width: 120px;
    margin-right: 17px;
  }
  .course_box .course_list .list_cont {
    color: #101b37;
    padding-bottom: 20px;
    border-bottom: 1px solid #f3f3f5;
    flex: 1;
  }
  .infoBox .info_item {
    margin-bottom: 40px;
  }
}
</style>
