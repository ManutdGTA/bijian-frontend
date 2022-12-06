<template>
  <div>
    <TopBanner :tabIndex="0"></TopBanner>
    <div class="infoDetail">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/info' }">资讯</el-breadcrumb-item>
        <span>详情</span>
      </el-breadcrumb>
      <div class="details_box">
        <div class="details_box_head">
          <p class="details_title">JustLend DAO借贷市场存借规模TOP3 一览</p>
          <div class="details_info">
            <div class="details_info_left">
              <div class="info_author">
                <p class="anuthor">ODAILY</p>
                <p class="time">2022-12-06 14:37</p>
              </div>
            </div>
            <div class="details_info_right">
              <div class="info_collect">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA3lJREFUSEu1lVtoHGUUx/9nZvbSqHWtxSaaJUI2pFLQKj40lUAejBQVfPLFB02Rbk13N4ixTZu9TLazYzY2rUt20zSJlhLxQXzxoRIlfQgU2kCLFxQxzQqFhMai0TWXzWZn5juywUpaN8kEdJ4+hv85v+9/LnzEzDL+x4+2AkimLngty+Jw+5szdu+0JUBM78sQE8cjodB/DujpGXpsoVi4QQDcFXJ9uD1gy4VtBzE9nWIh/AAxiM5rNl3YAugfjFQWFnNZEH1MxJYQOLjNpgtbgJie7hWCA263+wmSZLOwvDQJ4LwWadu0F5sCkqmBmqUF43sQPtUibYdKzY3pmYwQ4qDb5Xgqcqw1u1HDVwFDQ5/dP5ubq4dp+ixmHzN8ANcRw8fATgCmomzbo5449HMpWTx5zmsaK5MAOQHMgWgKzFmSaEomykJRsm7Pw5Md/lcXVwHdpwfr8/mVMQCPAhAATRM4CwlTRJSVIX0b6wyMr71pPJlptCx6BsKqA5GPmesAeAFIAG4pFa5mtf3w5D8l6j4zXJtfyl8CqEKRpANqOPiN3Vkv6bTkwN6iYXwFUN7lUprvlO6uHiRODT2+UiiMAeRRXMqL6rHWa3YgWnf/s0XTGmXgT7fb/XzkqP/mnbh/NVk//VH1cn7xEoEecSqOl6MnWq9sBOnqOdtgFa2LBPxa4XA0Hz/+1vRafdkpej/9YdViLj/GQLXTKe2PdgR/LAfReoZ3F4vLEwSacd0nvxB+58ite3Xrjqmq978mhDXidLr2RjsO/1AOEO8d2GMuG98pMr2hdoY+KadZH5DIaIJFe633yQdbWpqMcsGjo6PKles35kmSz5wMByNbAkQTfZ+DqUaLhp4uBfb3j3hu5+bfLZ13ebb3BgKv50rnaKLva2KaPhkNvbIlQEzryzLR1aodlf5f/rgdZCGOAvD8nSRHknSq8qFdmdm52UEAz2nRtlrbgFTqwgO/Lcz/LoEmANQwoYrAXzgcrtUyGMZKgkEvEWOWCDct5oad3u073m5pWbDV5C79bIMlzMslMQGXJafS2dVx5Ora4Fh3ej9M1hloLP2XJaWxK3y3ZjW+3JOpJtJ+AfZLkiMS72z9cqM9UN8bOCCEkVBIGlTDwWFbDpLJc959+3bPNDU1sZ1NHh8fp4mJn6rvXbJ1HdhJalez6XtgN9F6ur8A4gSeKAzBy0QAAAAASUVORK5CYII="
                  alt=""
                />
                0人收藏
              </div>
              <div class="info_share">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATpJREFUSEvdlTFOw0AURGeQKCgQF0mDqOiAJmfgBHReQgOFd1G8RkqaBIeKE3AFaMAdFRIFF0EgUUT4IxMsWcZ4bcspiEt7dt7O/3/XxJIfLtkfKwg4HY221ucbloKekD8JJQ61GubL6dvZQ7G8FDxb4w3y73+VyLfRDCJHBB+FlIXYBZAdCDZBxqH29isBOojuAaxZo/bqDIBvowkEAxBvAJ+cgCx6UVgGy5lPAW6nms4AefNQq5O/NlbSg0XzqhIUzVN9ZwBzcdVPPpNbENN0564+tUpghpf94Pz4zmWefm8FqGOcaf4PwA+im+/hMOrQcZLdU1R+JsrXdVai2mPa9KrI0uggigEk1qiDFpdd9dxQhALZBXkdauVVAsqvaydAhHiZv3/o8fjstRLQZMbraFfwl1kndhPNF018rRnD2WHMAAAAAElFTkSuQmCC"
                  alt=""
                />分享
              </div>
            </div>
          </div>
        </div>
        <div class="details_box_content">
          <p>
            最新数据显示，截至&nbsp;12&nbsp;月&nbsp;5&nbsp;日，JustLend
            DAO&nbsp;借贷市场中存款规模&nbsp;TOP&nbsp;3&nbsp;分别为<span
              class="alert"
              ><span class="alertFont"
                ><span class="font">BTC</span></span
              ></span
            >（&nbsp;18.9&nbsp;亿美金）、<span class="alert"
              ><span class="alertFont"
                ><span class="font">USDC</span></span
              ></span
            >（&nbsp;5.74&nbsp;亿美金）、<span class="alert"
              ><span class="alertFont"
                ><span class="font">USDT</span></span
              ></span
            >（&nbsp;3.50&nbsp;亿美金）；借款规模&nbsp;TOP&nbsp;3&nbsp;分别为&nbsp;USDC（&nbsp;2.88&nbsp;亿美金）、USDT（&nbsp;1.01&nbsp;亿美金）、USDJ（&nbsp;1407&nbsp;万美金）。
          </p>
          <p>
            <img
              src="https://piccdn.0daily.com/202212/06062716/ysx84erzu8p70co3.jpg!heading"
              alt="JustLend DAO借贷市场存借规模TOP3 一览"
              data-img-size-val="1024,576"
            />
          </p>
          <p>
            通过&nbsp;JustLend
            DAO&nbsp;存入资产，就能获取相应&nbsp;APY&nbsp;奖励，欢迎大家前去&nbsp;JustLend
            DAO&nbsp;体验。
          </p>
          <p>
            JustLend
            DAO&nbsp;是波场&nbsp;TRON&nbsp;网络首个官方借贷平台，用于建立基于波场&nbsp;TRON&nbsp;资产的供求变化，以算法计算得出利率的资金池。协议中存在两种角色，包括资产的存款方和借款人，并且资产的存款方和借款人可以直接与协议进行交互，从而赚取或支付浮动利率。
          </p>
        </div>
        <div class="details_box_tips">
          <p>免责声明：</p>
          <p>1.资讯内容不构成投资建议，投资者应独立决策并自行承担风险</p>
          <p>
            2.本文版权归属原作所有，仅代表作者本人观点，不代表币见行情的观点或立场
          </p>
        </div>
        <div class="details_box_end">
          <div>
            <div class="details_prev_new">
              上一篇：
              <a>数据：11月份，大型交易所交易量增长23%至7050亿美元</a>
            </div>
          </div>
          <div>
            <div class="details_next_new">
              下一篇：
              <a>ASIC主席：FTX曾利用澳大利亚监管漏洞获得金融牌照</a>
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
  name: "InfoDetail",
  components: {
    TopBanner,
    BottomPage,
  },
};
</script>

<style lang="less">
.infoDetail {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  line-height: 1.5;
  font-size: 14px;
  .details_box .details_box_head {
    margin-top: 30px;
  }
  .details_box .details_title {
    font-size: 24px;
    color: #101b37;
    line-height: 33px;
    font-weight: 600;
  }
  .details_box .details_info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }
  .details_box .details_info_left {
    display: flex;
    align-items: center;
  }
  .details_box .details_info_left .info_author .anuthor {
    font-size: 14px;
    color: #101b37;
    line-height: 20px;
  }
  .details_box .details_info_left .info_author .time {
    font-size: 12px;
    color: #7c8291;
    line-height: 17px;
  }
  .details_box .details_info_right {
    display: flex;
    align-items: center;
  }
  .details_box .details_info_right .info_collect {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    color: #585f72;
    line-height: 20px;
  }
  .details_box .details_info_right .info_collect img {
    width: 24px;
    height: 24px;
    margin-right: 4px;
  }
  .details_box .details_info_right .info_share {
    display: flex;
    align-items: center;
    margin-left: 24px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    color: #585f72;
    line-height: 20px;
  }
  .details_box .details_info_right .info_share img {
    width: 24px;
    height: 24px;
    margin-right: 4px;
  }
  .details_box .details_box_content {
    margin-top: 40px;
  }
  .details_box .details_box_tips {
    margin-top: 40px;
    padding: 16px;
    background: #f9f9fa;
    font-size: 14px;
    color: #7c8291;
    line-height: 22px;
  }
  .details_box .details_box_end {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 80px;
  }
  .details_box .details_next_new,
  .details_box .details_prev_new {
    font-size: 14px;
    color: #101b37;
    line-height: 20px;
    cursor: pointer;
  }
  .details_box .details_next_new a,
  .details_box .details_prev_new a {
    color: #1069fb;
  }
  .details_box .details_next_new,
  .details_box .details_prev_new {
    font-size: 14px;
    color: #101b37;
    line-height: 20px;
    cursor: pointer;
  }
  .details_box .details_next_new a,
  .details_box .details_prev_new a {
    color: #1069fb;
  }
}
</style>
