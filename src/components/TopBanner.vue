<template>
  <div class="topbanner">
    <div class="headPage">
      <div class="headCont">
        <div class="headCont_left">
          <img
            src="data:image/png;base64,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"
            alt=""
            class="logo"
          />
          <div class="section_cent">
            <div>虚拟币: <span>17556</span></div>
            <div>交易所: <span>616</span></div>
            <div>钱包: <span>92</span></div>
            <div>BTC占比: <span>38.204%</span></div>
            <div>ETH Gas: <span>10Gwei</span></div>
          </div>
        </div>
        <div class="headCont_right">
          <div class="headPhone">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAQVJREFUWEftlz1Ow0AQhb9XEIWSNkpDR8MNKBAlOQBSGqQocCl+KoTEAaDEBUegoUwRpaKPRYqNRriy1l6vZWMh7bazs++bN1vMiIGPBtanEsA5dww8AGfAQUvQHPgAbiWtfG/UAWTAuSfpG3gCXClmb10DR56cTNJFLMBPReWfwKIC4BE49QjtJI1iAcoVtuzCb5okr9t1LUgAyYHkQHIgOZAcSA4kB/6FA+tiTJqGxqU+JqIXYF4IPwNXdRB9ANxIujdR59wSuPtrgC/AhO0YyEnXAFtgHOptw3gu6TB2LH8FLhsKhK69SZrFAkyKvtpG09YJW83eAfsvmyiAUEldxQffjvdLwooh+WT/TwAAAABJRU5ErkJggg=="
              alt=""
            />
            APP下载
          </div>
          <div class="login_box">
            <div class="login">登录</div>
            <div class="register">注册</div>
          </div>
        </div>
      </div>
    </div>
    <div class="headTabsBox">
      <div class="headTabs">
        <div class="headTabs_tab">
          <router-link to="/">
            <div :class="{ actived_tab: tabIndex === 0 }">行情</div>
          </router-link>
          <router-link to="/platform">
            <div :class="{ actived_tab: tabIndex === 1 }">平台</div>
          </router-link>
          <router-link to="/wallet">
            <div :class="{ actived_tab: tabIndex === 2 }">钱包</div>
          </router-link>
          <router-link to="/block">
            <div :class="{ actived_tab: tabIndex === 3 }">板块</div>
          </router-link>
          <router-link to="/rank">
            <div :class="{ actived_tab: tabIndex === 4 }">排行</div>
          </router-link>
          <router-link to="/info">
            <div :class="{ actived_tab: tabIndex === 5 }">资讯</div>
          </router-link>
          <router-link to="/fastInfo">
            <div :class="{ actived_tab: tabIndex === 6 }">快讯</div>
          </router-link>
        </div>
        <div class="headTabs_search" @click="handleShowSearch">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAe9JREFUOE+lk01oE1EUhc+deZMYTZMJGH82xU0XiiDoRi2K6NJFu7CLggt1UZNpC9WF+266kyrUmYCi1X3BHwTRlWIRBFFw5boq/kD7gqk2zps50kjixMQg+rb33u/ce8+7gv980lE/wkyuGA1bxCCAnIBvYav7K3Oy2E2rDZAfD49JLDdIbhXBcwDLBAYE2AnBIxOrk7WKfEqCWoD8BI8iMg8AWTDh2tTqtezHZmLfOA9YsbkJIJZvar+eF92M/QSMMONujt4QWKwGarRbq5u82jaH6RcCubMSKK8NkPPMqMScN6ben1T+HVQoR2Mx4sspUcXPvtTW440O3LKZA7hHB86hXqZsHOP2lG3eAziiA+dxEnALYF4HzlBPVyeZdo1ZA2RIB+puC1AohzMxMFwNnF29AIVSfTfFeg1yr66kXv4CTHCQkXkaWerglyvy7E8QtxzOQuSE9u1+QNgCNPbghQ9J7DBSP7zqZz90LtAcJ3ibIl7VV1fbbQSQLXGLLeaJAH0Ca7oeWfe+prFcCL8P0LLOgJgk5Ho1UGe7fqRGF6foSiaaicHTAmxIJL6jyPS6cr4UXhDLCrVvz7aNkKQWPWZDmn2A5MF4SVecV82ZXS86B/IiIOd1YF/qPKa/uE63HE2RXKpW1MI/AZIaPwCCS8cRgJX+sQAAAABJRU5ErkJggg=="
            alt=""
          />
          <div>搜索币种/交易所/资讯</div>
        </div>
        <div class="searchBox" v-if="isShowSearch">
          <div class="searchBox_input">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAe9JREFUOE+lk01oE1EUhc+deZMYTZMJGH82xU0XiiDoRi2K6NJFu7CLggt1UZNpC9WF+266kyrUmYCi1X3BHwTRlWIRBFFw5boq/kD7gqk2zps50kjixMQg+rb33u/ce8+7gv980lE/wkyuGA1bxCCAnIBvYav7K3Oy2E2rDZAfD49JLDdIbhXBcwDLBAYE2AnBIxOrk7WKfEqCWoD8BI8iMg8AWTDh2tTqtezHZmLfOA9YsbkJIJZvar+eF92M/QSMMONujt4QWKwGarRbq5u82jaH6RcCubMSKK8NkPPMqMScN6ben1T+HVQoR2Mx4sspUcXPvtTW440O3LKZA7hHB86hXqZsHOP2lG3eAziiA+dxEnALYF4HzlBPVyeZdo1ZA2RIB+puC1AohzMxMFwNnF29AIVSfTfFeg1yr66kXv4CTHCQkXkaWerglyvy7E8QtxzOQuSE9u1+QNgCNPbghQ9J7DBSP7zqZz90LtAcJ3ibIl7VV1fbbQSQLXGLLeaJAH0Ca7oeWfe+prFcCL8P0LLOgJgk5Ho1UGe7fqRGF6foSiaaicHTAmxIJL6jyPS6cr4UXhDLCrVvz7aNkKQWPWZDmn2A5MF4SVecV82ZXS86B/IiIOd1YF/qPKa/uE63HE2RXKpW1MI/AZIaPwCCS8cRgJX+sQAAAABJRU5ErkJggg=="
              alt=""
            /><input
              type="text"
              placeholder="搜索币种/交易所/资讯"
              class="searchBox_input_ipt"
              v-model="input"
            /><img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAWtJREFUOE9j/P//PzMDFQAjLoOOHz/O//nbfyeG//8VwPYwMj7g5WLcZ2lp+RGbvRgG7T15UuTvpz+N/xgYEhkY/rOhamL8xcTAMJ+Zj6Xe2dz8DbIcikG7DhzT/Pfn/xaG///l8fqWkfEhEwujj5uD1XWYOrhBIJf8/vznJEFD4DoZH7LyspjDXAY3aNfuo1P/MfxPh6ljZmZm+Pv3L4rD0MWYGBhnurlaZ4ODEBTYoID9+OXfc1iYgDSYmegyfP78heHKtTtgw3S0VBh4eXkYTp25jGQB4y9+HiZJUASADdq191jgv3//ViNbD9IoIy3B8OTpSwYGhv9Q9gu4wTC1TExMoW7OVushBu05Wvjv//9u9ADW0VJlkJEWBws/eYppCEiciZGx1M3Fup+AQRBXQQx6yXDl2m2MyEQ1CK/XXoCCEuwybK5C8RrVAhvkXqpEP8ggqiVIsKuokUVg0UGVTIsctxQXI+SWcQC7lxUiOUMiWwAAAABJRU5ErkJggg=="
              alt=""
              @click="handleClearInput"
            />
          </div>
          <div>
            <div class="searchBox_hot">
              <div class="searchBox_hot_title">
                <span>热门搜索</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAm9JREFUOE+dlE9IFHEUx7+/347zW1bTWjeL1ENaWh6CELoEZSBEB62gS2QGUZ1KsV1bCNRCsMydDoEFRinUKaRLhR28dNCITkmHkJT+UJi6ppXuzDj7ezFjrTv7x6C5DPN+8z7v+77v8WNE5EGGRw9vrmEkq8SN6duZzlNjLBto+VLRKRm37oGxPnH82nlUn5N2sh4sfGG/vVp0fzIsOygU0CTJZvtnBjagatEz/wUyQ/4xIlQlqnqUprXazKjI8ccyh1N8mBf5pZXoeBPN5FkaaP7q7nW+Hx9HCElq/mQy7mlXe2a67E8zvKlO7f725C/UDYoc9BpTr5+CUJNlUp9E3ePy2PMTe/hybFDUNmzFoVuW42Py1MyQf5AIR9YcN1frIc3rsBUr6mHRPfXMBVoOFzVIyxr4184wwCJAcZIZ61cj0bMukBH02/ux17UbnLVTHCfBaHvmAmxcaFFnsonWjKB/DkC+CyQKdkqCDnNhhAFb0mCEX+Lm3HoXyAz6YwTkJKbA2JAaidY5S9ha1MikdR+gWYAFVoFkCO17rlvRRf8HMJSs9I4xtXjHAbSMLjhJffXCHB/p54y/isu4lqRsQmhzlW5FrYEBkrLBDnqEd5/S9XU0tRWjrWwblubfrcb5HaHNXnCBYuHSam4tvgTARUmtDy2PzDRPhpoUY/ihvhInE74Nu0Tn5Pv0PWrd2EEy3iZ8uRXo/DyZrqi0DEuL406cK82iZ7o34WnqNWKGAmECikVktikVpIcKHzCio1zxtOR0z9x1TTjTfWRcLi/npOfmHOt4i58VpA+fLuaxhUYwlifzCnq9Vya+pBb5DZxrEyJhgmbZAAAAAElFTkSuQmCC"
                  alt=""
                />
              </div>
              <div class="searchBox_hotbox">
                <div class="searchBox_hot_item">
                  <img src="@/assets/tether.png" alt="" />
                  <div>USDT</div>
                </div>
                <div class="searchBox_hot_item">
                  <img src="@/assets/wrapped-bitcoin.webp" alt="" />
                  <div>WBTC</div>
                </div>
                <div class="searchBox_hot_item">
                  <img src="@/assets/binanceusd_72.webp" alt="" />
                  <div>BUSD</div>
                </div>
                <div class="searchBox_hot_item">
                  <img src="@/assets/bitcoin.webp" alt="" />
                  <div>BTC</div>
                </div>
                <div class="searchBox_hot_item">
                  <img src="@/assets/shibainu.webp" alt="" />
                  <div>SHIB</div>
                </div>
                <div class="searchBox_hot_item">
                  <img src="@/assets/ethereum.webp" alt="" />
                  <div>ETH</div>
                </div>
              </div>
            </div>
            <!---->
          </div>
          <div class="searchBox_footer">
            <div class="searchBox_footer_left" @click="handleHideSearch">
              <div class="footer_esc">ESC</div>
              <div class="footer_txt">取消</div>
            </div>
            <div class="searchBox_footer_right">
              <div class="footer_esc">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALdJREFUSEvtlLEKwkAQRN+U/pC9VfwdLQTttRL9HrGwtfFjxE6QkUACFhdyd15AIVcP+3Z2d04M/DRwfUZA74T/a0S2L7UlSbPWWlEHvwewXUk69W6yESQ5sH0AFsA8FhIN+Ch+lLQs6iC3eN2E7Stwl1QFr8j2BtgCD+AW23mjmwBTYCVp3wVYA7tMwBM4A/VYX505+GZEIcfBoJWEdCY550yjHbTC1KAlAxKvKCgv+tmNDrJW8gaFuVMZuLqaHgAAAABJRU5ErkJggg=="
                  alt=""
                />
              </div>
              <div class="footer_txt">进入</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBanner",
  data() {
    return {
      // tabIndex: 0,
      isShowSearch: false,
      input: "",
    };
  },
  props: {
    tabIndex: Number,
  },
  methods: {
    handleShowSearch() {
      this.isShowSearch = true;
    },
    handleClearInput() {
      this.input = "";
    },
    handleHideSearch() {
      this.isShowSearch = false;
    },
  },
  created() {
    var ua = navigator.userAgent;
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
      isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
      isAndroid = ua.match(/(Android)\s+([\d.]+)/),
      isMobile = isIphone || isAndroid;
    if (isMobile) {
      console.log("mobile");
    } else {
      console.log("pc");
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.topbanner {
  a:hover {
    text-decoration: none;
  }
  .headPage {
    display: flex;
    align-items: center;
  }
  .headPage {
    width: 100%;
    min-width: 1200px;
    height: 50px;
    background: #1069fb;
    justify-content: center;
  }
  .headPage .headCont {
    width: 1200px;
    justify-content: space-between;
  }
  .headPage,
  .headPage .headCont {
    display: flex;
    align-items: center;
  }
  .headPage .headCont .headCont_left {
    display: flex;
    align-items: center;
  }
  .headPage .headCont .headCont_left .logo {
    width: 147px;
    height: 28px;
    margin-right: 40px;
  }
  .headPage .headCont .headCont_left .section_cent {
    display: flex;
    align-items: center;
  }
  .headPage .headCont .headCont_left .section_cent div {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #fff;
    margin-right: 30px;
  }
  .headPage .headCont .headCont_right {
    color: #fff;
    display: flex;
    align-items: center;
  }
  .headPage .headCont .headCont_right .headPhone {
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
  }
  .headPage .headCont .headCont_right .headPhone img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
  .headPage .headCont .headCont_right .login_box {
    display: flex;
    align-items: center;
  }
  .headPage .headCont .headCont_right .login,
  .headPage .headCont .headCont_right .register {
    width: 60px;
    height: 30px;
    background: #1069fb;
    border-radius: 8px;
    border: 1px solid #fff;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    margin: 0 20px;
    cursor: pointer;
  }
  .headPage .headCont .headCont_right .register {
    width: 60px;
    background: #fff;
    border-radius: 8px;
    border: none;
    color: #1069fb;
    margin: 0;
  }
  .headTabsBox {
    width: 100%;
    min-width: 1200px;
    height: 80px;
    border-bottom: 1px solid #f3f3f5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .headTabsBox .headTabs,
  .headTabsBox .headTabs_tab {
    display: flex;
    align-items: center;
  }
  .headTabsBox .headTabs {
    position: relative;
    width: 1200px;
    justify-content: space-between;
  }
  .headTabsBox .headTabs,
  .headTabsBox .headTabs_tab {
    display: flex;
    align-items: center;
  }
  .headTabsBox .headTabs_tab .actived_tab {
    color: #1069fb;
    font-weight: 700;
  }
  .headTabsBox .headTabs_tab div {
    font-size: 18px;
    color: #343d55;
    line-height: 25px;
    margin-right: 40px;
    cursor: pointer;
  }
  .headTabsBox .headTabs_search {
    display: flex;
    align-items: center;
    width: 300px;
    height: 40px;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #1069fb;
    cursor: text;
  }
  .headTabsBox .headTabs_search img {
    width: 16px;
    height: 16px;
    margin: 0 10px;
  }
  .headTabsBox .headTabs_search div {
    font-size: 14px;
    color: #b7bac3;
    line-height: 20px;
  }
  .searchBox {
    position: absolute;
    top: -10px;
    right: 0;
    width: 400px;
    background: #fff;
    box-shadow: 0 2px 8px 0 hsl(225deg 9% 74% / 20%);
    border-radius: 8px;
    border: 1px solid #f9f9fa;
    padding: 0 16px;
    box-sizing: border-box;
    padding-bottom: 50px;
    z-index: 999;
  }
  .searchBox .searchBox_input {
    display: flex;
    align-items: center;
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    border-bottom: 1px solid #f3f3f5;
  }
  .searchBox .searchBox_input img {
    width: 16px;
    height: 16px;
  }
  .searchBox .searchBox_input .searchBox_input_ipt {
    margin-left: 10px;
    width: 100%;
    height: 51px;
    border: none;
    outline: none;
    color: #101b37;
    caret-color: #1069fb;
  }
  .searchBox .searchBox_input img {
    width: 16px;
    height: 16px;
  }

  .searchBox .searchBox_hot {
    margin-top: 20px;
  }
  .searchBox .searchBox_hot .searchBox_hot_title {
    display: flex;
    align-items: center;
  }

  .searchBox .searchBox_hot .searchBox_hot_title span {
    font-size: 14px;
    color: #101b37;
    line-height: 20px;
  }
  .searchBox .searchBox_hot .searchBox_hot_title img {
    margin-left: 4px;
    width: 18px;
    height: 18px;
  }
  .searchBox .searchBox_hot .searchBox_hotbox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    flex-wrap: wrap;
  }
  .searchBox .searchBox_hot .searchBox_hot_item {
    margin-bottom: 8px;
    width: 117px;
    height: 74px;
    background: #f9f9fa;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
  }
  .searchBox .searchBox_hot .searchBox_hot_item img {
    margin: 12px auto 4px auto;
    width: 24px;
    height: 24px;
  }
  .searchBox .searchBox_hot .searchBox_hot_item div {
    font-size: 16px;
    color: #101b37;
    line-height: 22px;
  }
  .searchBox .searchBox_footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 400px;
    height: 50px;
    background: #f9f9fa;
    border-radius: 0 0 8px 8px;
    padding: 0 16px;
    box-sizing: border-box;
  }
  .searchBox .searchBox_footer .searchBox_footer_left,
  .searchBox .searchBox_footer .searchBox_footer_right {
    display: flex;
    align-items: center;
  }
  .searchBox .searchBox_footer .footer_esc {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 24px;
    background: #b7bac3;
    border-radius: 4px;
    color: #fff;
  }
  .searchBox .searchBox_footer .footer_txt {
    margin-left: 8px;
    font-size: 14px;
    color: #7c8291;
    line-height: 20px;
  }
  .searchBox .searchBox_footer .searchBox_footer_left,
  .searchBox .searchBox_footer .searchBox_footer_right {
    display: flex;
    align-items: center;
  }
  .searchBox .searchBox_footer .footer_esc {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 24px;
    background: #b7bac3;
    border-radius: 4px;
    color: #fff;
  }
  .searchBox .searchBox_footer .footer_txt {
    margin-left: 8px;
    font-size: 14px;
    color: #7c8291;
    line-height: 20px;
  }
}
</style>
