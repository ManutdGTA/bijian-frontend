<template>
  <div class="bottomPage">
    <div class="footerPage">
      <div class="footer_cont">
        <div class="footer_top">
          <div class="footer_left">
            <div>
              <p>
                <img
                  src="http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20220905/c42d4722d1594b28a50d811d0b003223.png"
                  width="147"
                  height="28"
                />
              </p>
              <p>&nbsp;</p>
              <p style="line-height: 1.5">
                <span style="font-size: 10pt; color: rgb(16, 27, 55)"
                  >币见行情是一款轻便、简洁、专业的区块链交易数据和资讯软件，为用户提供实时行情、链上数据、项目动态、分析工具、社区等一站式投资服务，是帮助币圈用户成长的智能投资助手。</span
                >
              </p>
              <p style="line-height: 1.5">&nbsp;</p>
              <p>
                <span style="font-size: 10pt; color: rgb(124, 130, 145)"
                  >隐私政策 @2022 bijianhangqing. ALL Rights Reserved</span
                >
              </p>
            </div>
          </div>
          <div class="footer_right">
            <div>
              <div class="footer_right_title">关于我们</div>
              <div class="footer_right_item">
                <a href="/#/About" target="_blank">关于我们</a
                ><a href="/#/faq" target="_blank">常见问题</a
                ><a href="/#/statement" target="_blank">免责声明</a
                ><a href="/#/Announcement" target="_blank">意见反馈</a>
              </div>
            </div>
            <div class="footer_right_center">
              <div class="footer_right_title">联系我们</div>
              <div class="footer_right_item">
                <a href="/#/About" target="_blank">官方客服</a
                ><a href="/#/About" target="_blank">官方邮箱</a
                ><a href="/#/About" target="_blank">官方推特</a
                ><a href="/#/About" target="_blank">官方交流群</a>
              </div>
            </div>
            <div>
              <div class="footer_right_title">用户服务</div>
              <div class="footer_right_item">
                <a href="http://m.bjhq.vip:8088/" target="_blank">访问手机版</a
                ><a href="http://bjhq.vip/" target="_blank">APP下载</a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer_link">
          <div class="footer_link_title">友情链接：</div>
          <div class="footer_linkurl">
            <a href="https://robot.feixiaohao.co/">报价机器人</a
            ><a href="http://www.oicq88.com/">网名</a
            ><a href="https://apr999.com/">defi挖矿收益对比</a
            ><a href="http://www.qqbiaoqing.com/">表情</a
            ><a href="http://www.ip138.com/">IP查询</a
            ><a href="https://swap111.com/">Dex行情</a
            ><a href="https://www.feixiaohao.co/currencies/ethereum/">以太坊</a
            ><a href="http://www.liantu.com/">二维码</a
            ><a href="http://www.shilian.com/">世链财经</a
            ><a href="https://www.btcfans.com/">比特范</a
            ><a href="https://www.feixiaohao.co/currencies/dogecoin/">狗狗币</a
            ><a href="https://www.feixiaohao.co/currencies/binance-coin/">BNB</a
            ><a href="https://www.feixiaohao.co/currencies/tether/">泰达币</a
            ><a href="https://www.fx678.com/">汇通网</a
            ><a href="https://www.chainfor.pro/">链向财经</a
            ><a href="https://www.chainnode.com/">区块链社区</a
            ><a href="https://www.zuanbi8.com/">赚币吧</a
            ><a href="https://www.yitaifang.com/">以太坊浏览器</a
            ><a href="http://www.minecraftxz.com/">我的世界</a
            ><a href="https://www.egouz.com/">网站推荐</a
            ><a href="https://www.qklw.com/">区块链网QKLW</a
            ><a href="https://dexnav.com/">区块链导航</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomPage",
};
</script>

<style scoped lang="less">
.bottomPage {
  .footerPage {
    width: 100%;
    height: 360px;
    background: #f7fafd;
  }
  .footerPage .footer_cont {
    width: 1200px;
    padding: 40px 0;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .footerPage .footer_cont .footer_top {
    display: flex;
    justify-content: space-between;
  }
  .footerPage .footer_cont .footer_top .footer_left {
    width: 500px;
  }
  .footerPage .footer_cont .footer_top .footer_right {
    display: flex;
  }
  .footerPage .footer_cont .footer_top .footer_right .footer_right_center {
    margin: 0 40px;
  }
  .footerPage .footer_cont .footer_top .footer_right .footer_right_title {
    font-size: 16px;
    font-weight: 700;
    color: #101b37;
    margin-bottom: 28px;
  }
  .footerPage .footer_cont .footer_top .footer_right .footer_right_item {
    width: 140px;
  }
  .footerPage .footer_cont .footer_top .footer_right .footer_right_item a {
    margin-bottom: 15px;
    color: #585f72;
    display: block;
  }
  .footerPage .footer_cont .footer_link {
    display: flex;
    border-top: 1px solid #dbdde1;
    padding-top: 20px;
    margin-top: 20px;
  }
  .footerPage .footer_cont .footer_link .footer_link_title {
    color: #101b37;
    white-space: nowrap;
  }
  .footerPage .footer_cont .footer_link .footer_linkurl {
    line-height: 22px;
  }
  .footerPage .footer_cont .footer_link .footer_linkurl a {
    color: #585f72;
    margin-right: 10px;
    white-space: nowrap;
  }
}
</style>
