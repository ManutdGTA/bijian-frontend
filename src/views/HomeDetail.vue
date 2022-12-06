<template>
  <div>
    <TopBanner :tabIndex="0"></TopBanner>
    <div class="homeDetail">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">行情</el-breadcrumb-item>
        <span>BTC</span>
      </el-breadcrumb>
      <div class="homedatail_header">
        <div class="homedatail_head_info">
          <div class="head_info_left">
            <img src="@/assets/bitcoin.webp" alt="" />
            <div class="left_coin_info">
              <div class="coin_info_name">
                <p>比特币(BTC)</p>
                <div class="coin_info_collect">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAl5JREFUOE+dlE1IVFEUx///O0/NcCFGX4ogglFIHzIfMjgvzVVCZuk8yaRF0LZWQbQJWkWLaNG6nYb4piyjj00lM5OS7w0WGC0EF5lSSNKiEvS9d+JJE2O9GaG7uYvzv797zv/cc4ktVotu7PQlMxlzuZSUW3AY0Y13vsbOmIcBSDF9SVBE7+8DJOUfFpH+XDZl/h8oYcwA2EbCE8AtlVXRjKLt/d3iyTjBcyJwQbkHMGlnRu8HZVUIYmtHb50jWhNdaQJxCUCFvQf7YTZLJDH7HiRBue2BcyGE5qz0yKe8bwzrvXuB0GMCBwBsL7jth4icz/sS0ZM9AIcAVBVofgrwAXC72Rw3aio1WAAaIbgrIQ5rdObeTDxYDOgS43Gjdk25+5RSZwW8AGB+1UF0o7To0Z56T8pfUrCLSrqsdGqy1LOItRtxz8MzAZYV1zqt9KOFPx61tJ2sDbHiBYg6kies9Gg6CBZrT+qexycAllwv1DnzemTJ123qWmvrwG633HkFoNbOmNVBoLBurFDwhRqOWRPm57zmn/aH9eQQBQk7m2oIAkV0Y56CKStrDhbGg0D+SHzMZVLdG/4ljOP+bmXN5/4eSRjjIBrsjHmoKCgcDpexsvG7kLfgyVMq3ACQ+H0gKx6uUrELIpdldb4ql8utB5YWbetrFqVmASwAqBdiUQmviwhF4RoFdfkYXOegPTnmazfWptIKhnQFkJtlDu9MTZmrvjAeNyrXNbkI8AqAmr/HZRMoFju9wytXZxzNHX478fBbkNlHOk5Va05oUK15I9PTY1+Ldm2L/6lo+BcnNem5TExPfwAAAABJRU5ErkJggg=="
                    alt=""
                  />
                </div>
              </div>
              <div class="coin_info_rank">
                <div class="info_rank_label">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAL5JREFUKFON0D0OAXEQBfD3iM9EYnEHJxCdUiXhHDqrpKXc7ZxjC5VOiwM4BJaExEf8n/wlm2C3MOXkN28mQ/xZtO42cHYiqkkzFPY5P6y94dV1FCFCGwAS2Ih6eS/kJ7wQ2IKaWiBxDKEOovgFCZyN1Cn4x6WFj2G5ZcS5gNJvIgStCt6x+b7bLa+i9TEIICB5AoyRWAHQtUNJMPFZMUhonU5hYvXTYBRbfXedGcUg4x8Wn5GPQaUtqpf1wv4LvDJaCwaVDtAAAAAASUVORK5CYII="
                    alt=""
                  /><span>No.1</span>
                </div>
                <p>流通市值:3244.91亿</p>
              </div>
              <div class="coin_info_tabs">
                <div class="info_tabs_item">公链</div>
                <div class="info_tabs_item">PoW</div>
                <div class="info_tabs_item">灰度信托基金</div>
                <div class="info_tabs_item">Coinbase Pro综合</div>
                <div class="info_tabs_item">Bitwise10指数基金</div>
                <div class="info_tabs_item">CoinList 上线</div>
                <div class="info_tabs_item">Robinhood 上线</div>
                <div class="info_tabs_item">2024减半</div>
              </div>
            </div>
          </div>
          <div class="head_info_right">
            <div class="info_right_link">
              <div class="info_right_item">官网</div>
              <div class="info_right_item">区块链浏览</div>
              <div class="info_right_item">白皮书</div>
            </div>
            <div class="info_link_social">
              <a href="https://0.plus/www_Bitcoin_com" target="_blank"
                ><img
                  src="data:image/png;base64,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"
                  alt="" /></a
              ><!----><!----><!----><a
                href="https://twitter.com/BTCTN"
                target="_blank"
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABZNJREFUaEPVWmtsU2UYfp5zBm7QnsYYEJZ2VEg0wQQNmVGMiCZoVIKKyBT5oa6txgteYjDGQKLxkiiioNFE1jFDkOCM4CUoCaIkDKcGEn+oiYJc2mZiYiA97ZRtPec1p6NjLW3P124ltr+Wfc97efp+7+X7vhJ1/mGd+49xISAivOQD82rLwiIAMwVshqAZkGYQAuGfIPoI6QNwRNex8+gDxg8kZaxf4JgItGxKL7QtexmJ20VkWiXOkDwhgs81Xfs41u75uhLZ0diqCAS7ktdYGb4ukPnVGs53gvv0Bnn22IO+7yvVVxGBlk2nZ9r24FqI3FWpISU8uV3TJq6KtTceUcID6jngbBexrG4BLlRVXg2OwCnqepvqtlKKgL8ztRIib0FEr8apimVIC+TTiZD3HTdZVwL+aGo9xH7STVFN1qltSIS9T5XTXZZA9pu37bdr4pyqUk17olwkShLIlkjb3nXetk0pQqSladotpXKiKAGn2og1cKDWCasahOHEvqC1WHUqSsAfNT+pWalU9boQR25PhI2l5/y78B9Ok8pk0FutnVrKNTRgXmGzOycCgai5T0Suq6Uj1eom2RMPG3ndP4/A8Gxj7a7WwPmQ03T9ptEJnUfAHzU3QiRSM0fILZpomzFp8oGsjX/6WwHrfhtYcdYmvwHlKgi8xf3gxkTEeDi3NkLAGYlbOlN9SlMltQ0Uu0GAx1TIkhwU4t5EyNhRDB/YZN5BW4I6uWsIWitsa0vpqsoTsZC3OTeKjxCY0WnOs2z5TsUhXeO1x0NGb6DDfEUgz7vJaORzsbDxmhtuRmfyVku4EoJ+QO4uhR+dzCMEAtHkSyJY7WbEWZ/AicGj4abjzt/+TnMJRDZAECgqS/Q3NhsXHb6NA266/d3S1NDf77Msq1cEwdJRwMvxsG+Ns36WQEdyqwDL3Yw465rG+bGQ0ZPDztksk08OptZQ5KFzmh+xJxH2LVTRG+xKX5nJWJ8BaCmHJ7E1HvZl82aEgD9qfguRG1QMEXg3HvE9Xoid3S0TzVRqEQTLKTJXyCCB/fGwsUBFbyCa3CaCe1yx5N5E2Lgxn0CH+Rsgl7oKZ1lzSNOwwMmDcniH0ED634v/aJ8UV9Eb6EjuFkAhWvw9ETEuKyCQTAHwqBjSqLVBZJZN78ZEmCdVZFQwgQ7zZ4FcroBNJyK+bJkdtYWSZunam6+SOu+MtxvOXh23T7BLGq1M6qRAmlyVEqlE2GdUv4XI/bGQd/54XIvknM2WUBtfujqfBRTbQhUk8TBzvhoLe1ePF4lANPmeCB5RIlAsiQPR5IciuE9JQQ5E7tTJdcfaPXvHQmTW5tTUgUH7CASTVewXLaOVNLLhKFKoYQnBQ1PmeA4dbOWQivFimECn+YbY8oyqPFmkkVVzDiD5aSjkXfoCaasaL8Q5zcuy7F4RaVTVUXSUqGiYG2WJxDY2GY/GVvCUqgM53Mxu8Q0lzYMCzFKVda4kiw5zjoJqx2kSpoAfAdr2RNizS8WZ2d3iSSXNHWqNa7TGEuO0A6n+QMO/Ca73+jxrf23joBuBYFd6mpWxdgow1w1buF72QOOAFY6UP5FMC2Bqgl9EQ8/UK7xfqSZxS2eqzbZlHSD+Sp0nuC8eMa7Pi0ehErdzAYGkUHtzgvD9oxHPXypOLOsW/cd0eoFty4tjOW8rHerP5IL7tQppEbIH4G5deKChST88yW46ZVqwRD89HZmh6bbFACg3C7AYIlNUyJbEqF6rDOdCnV9sjSR0vV4t5sJY15e7IyTq+Xo9LxL1+sCRI1HXT0xnSdTxI9/o+px9ZrW4dixNKa+bkj26Lqtq/sxa2GTOvOK0EVisdCWZN8XyhABfaJrWrfoiWazJuT7yqXTPsj81yCpg3//ypwYq5GqNGZcI1NrJcvr/A4JmqU+fZtDGAAAAAElFTkSuQmCC"
                  alt="" /></a
              ><a href="https://github.com/bitcoin/bitcoin" target="_blank"
                ><img
                  src="data:image/png;base64,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"
                  alt="" /></a
              ><a href="https://t.me/www_Bitcoin_com" target="_blank"
                ><img
                  src="data:image/png;base64,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"
                  alt="" /></a
              ><!----><!----><a
                href="https://www.reddit.com/r/Bitcoin"
                target="_blank"
                ><img
                  src="data:image/png;base64,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"
                  alt="" /></a
              ><!---->
            </div>
          </div>
        </div>
        <div class="homedetail_data">
          <p class="price">£14061.7291</p>
          <div class="rate" style="background: rgb(238, 10, 36)">-1.74%</div>
          <div class="rate_price" style="color: rgb(238, 10, 36)">
            £-13.5347647
          </div>
        </div>
        <div class="homedetail_end">
          <div class="homedetail_end_left">
            <div class="end_left_top">
              <div class="end_top_item">
                <p class="homedetail_end_key">流通市值</p>
                <p class="homedetail_end_val">£3244.91亿</p>
              </div>
              <div class="end_top_item">
                <p class="homedetail_end_key">发行价</p>
                <p class="homedetail_end_val">£0.0020675</p>
              </div>
              <div class="end_top_item">
                <p class="homedetail_end_key">流通量</p>
                <p class="homedetail_end_val">19,194,950(91.4%)</p>
              </div>
              <div class="end_top_item">
                <p class="homedetail_end_key">最大供应量</p>
                <p class="homedetail_end_val">21,000,000</p>
              </div>
            </div>
            <div class="end_left_bottom">
              <div class="left_bottom_item">
                <div class="item">
                  <p class="homedetail_end_key">24H量</p>
                  <p class="homedetail_end_val">£30.82万</p>
                </div>
                <div class="item">
                  <p class="homedetail_end_key">24H额</p>
                  <p class="homedetail_end_val">£52.04亿</p>
                </div>
              </div>
              <div class="left_bottom_item">
                <div class="item">
                  <p class="homedetail_end_key">24H最高</p>
                  <p class="homedetail_end_val">£17073.51482990737</p>
                </div>
                <div class="item">
                  <p class="homedetail_end_key">24H最低</p>
                  <p class="homedetail_end_val">£16796.8090246934</p>
                </div>
              </div>
              <div class="left_bottom_item">
                <div class="item">
                  <p class="homedetail_end_key">24H波幅</p>
                  <p class="homedetail_end_val" style="color: rgb(22, 176, 86)">
                    +1.647372%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="homedatail_content">
        <div class="homedatail_tabs_content">
          <!----><!----><!---->
          <div class="brief_boxs">
            <div class="brief_table">
              <p class="title">BTC币种简介</p>
              <div class="coin_introduction">
                比特币（BitCoin）的概念最初由中本聪在2008年提出，根据中本聪的思路设计发布的开源软件以及建构其上的P2P网络。比特币是一种P2P形式的数字货币。点对点的传输意味着一个去中心化的支付系统。与大多数货币不同，比特币不依靠特定货币机构发行，它依据特定算法，通过大量的计算产生，比特币经济使用整个p2p网络中众多节点构成的分布式数据库来确认并记录所有的交易行为，并使用密码学的设计来确保货币流通各个环节安全性。p2p的去中心化特性与算法本身可以确保无法通过大量制造比特币来人为操控币值。基于密码学的设计可...
                <div>
                  阅读更多
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAALdJREFUOE9jZKASYKSSOQxDyCCR7B9qv/+y6H6cwbKWGO/j9Bp/5p+ljAz/wxiZGGPfT2VZQcgw3GGU9p9LgPnPFgYGBltiDMMf2CQYRjjWiDSMsEEM/xkFMv/OZWD4n8jAyFT3YRpzM7bwImAQ2JDZDAz/kxn+MzR8mMHaiCvQ8RhEvCEgw3EaJJD1ZzLD//85hFwCcyFug3L+OzD+/WP1fjprG6E0hNdFxGhGVkNErBFn5OAzCADbEkMTlrbgGAAAAABJRU5ErkJggg=="
                    alt=""
                  />
                </div>
              </div>
              <div class="info_table">
                <div class="info_table_item">
                  <div>首次发行时间</div>
                  <div>2008-10-31</div>
                </div>
                <div class="info_table_item">
                  <div>首日开盘价</div>
                  <div>$0.0025</div>
                </div>
                <div class="info_table_item">
                  <div>众筹价格</div>
                  <div>--</div>
                </div>
                <div class="info_table_item">
                  <div>投资回报</div>
                  <div style="color: rgb(22, 176, 86)">$817654700</div>
                </div>
                <div class="info_table_item">
                  <div>历史最高</div>
                  <div>$68928.9(2021-11-10)</div>
                </div>
                <div class="info_table_item">
                  <div>历史最低</div>
                  <div>$65.53(2013-07-05)</div>
                </div>
                <div class="info_table_item">
                  <div>首次发行方式</div>
                  <div>挖矿</div>
                </div>
                <div class="info_table_item">
                  <div>所属公链</div>
                  <div>BTC</div>
                </div>
                <div class="info_table_item">
                  <div>最大供应量</div>
                  <div>21,000,000 BTC</div>
                </div>
                <div class="info_table_item">
                  <div>最大供应市值</div>
                  <div>$3570.87亿</div>
                </div>
                <div class="info_table_item">
                  <div>当前供应量</div>
                  <div>19,194,950 BTC</div>
                </div>
                <div class="info_table_item">
                  <div>当前供应市值</div>
                  <div>$3263.94亿</div>
                </div>
                <div class="info_table_item">
                  <div>流通量</div>
                  <div>19,194,950 BTC</div>
                </div>
                <div class="info_table_item">
                  <div>流通市值</div>
                  <div>$3923.71亿</div>
                </div>
                <div class="info_table_item">
                  <div>流通率</div>
                  <div>91.4%</div>
                </div>
                <div class="info_table_item">
                  <div>流通占全球总市值</div>
                  <div>37.4919%</div>
                </div>
                <div class="info_table_item">
                  <div>上架交易所</div>
                  <div>116家</div>
                </div>
                <div class="info_table_item">
                  <div>持币地址数</div>
                  <div>51,004,235</div>
                </div>
                <div class="info_table_laritem">
                  <div>支持钱包</div>
                  <div class="table_list_box">
                    <div class="table_list_item">infinito wallet</div>
                    <div class="table_list_item">Bying</div>
                    <div class="table_list_item">ELLIPAL</div>
                    <div class="table_list_item">iToken</div>
                    <div class="table_list_item">RenrenBit</div>
                    <div class="more">
                      查看更多
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAALdJREFUOE9jZKASYKSSOQxDyCCR7B9qv/+y6H6cwbKWGO/j9Bp/5p+ljAz/wxiZGGPfT2VZQcgw3GGU9p9LgPnPFgYGBltiDMMf2CQYRjjWiDSMsEEM/xkFMv/OZWD4n8jAyFT3YRpzM7bwImAQ2JDZDAz/kxn+MzR8mMHaiCvQ8RhEvCEgw3EaJJD1ZzLD//85hFwCcyFug3L+OzD+/WP1fjprG6E0hNdFxGhGVkNErBFn5OAzCADbEkMTlrbgGAAAAABJRU5ErkJggg=="
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="info_table_heightitem">
                  <div>概念分类</div>
                  <div class="info_table_plate">
                    <div class="plate_item">
                      公链
                      <span style="color: rgb(238, 10, 36)"> -0.52% </span>
                    </div>
                    <div class="plate_item">
                      PoW
                      <span style="color: rgb(238, 10, 36)"> -1.01% </span>
                    </div>
                    <div class="plate_item">
                      灰度信托基金
                      <span style="color: rgb(238, 10, 36)"> -0.87% </span>
                    </div>
                    <div class="plate_item">
                      Coinbase Pro综合
                      <span style="color: rgb(238, 10, 36)"> -0.87% </span>
                    </div>
                    <div class="plate_item">
                      Bitwise10指数基金
                      <span style="color: rgb(22, 176, 86)"> +0.09% </span>
                    </div>
                    <div class="plate_item">
                      CoinList 上线
                      <span style="color: rgb(238, 10, 36)"> -1.25% </span>
                    </div>
                    <div class="plate_item">
                      Robinhood 上线
                      <span style="color: rgb(22, 176, 86)"> +0.17% </span>
                    </div>
                    <div class="plate_item">
                      2024减半
                      <span style="color: rgb(238, 10, 36)"> -0.68% </span>
                    </div>
                  </div>
                </div>
              </div>
              <p class="table_title">相关链接</p>
              <div
                class="info_table"
                style="margin-top: 16px; margin-bottom: 20px"
              >
                <div class="info_table_item">
                  <div>官网地址</div>
                  <div>
                    <a href="https://bitcoin.org" target="_blank">网站1</a>
                  </div>
                </div>
                <div class="info_table_item">
                  <div>白皮书</div>
                  <div>
                    <a href="http://www.bitcoin.org/bitcoin.pdf" target="_blank"
                      >http://www.bitcoin.org/bitcoin.pdf</a
                    >
                  </div>
                </div>
                <div class="info_table_laritem">
                  <div>区块站1</div>
                  <div class="table_list_box">
                    <a href="http://blockchain.info" target="_blank">区块站1</a
                    ><a href="https://live.blockcypher.com/btc" target="_blank"
                      >区块站2</a
                    ><a href="https://blockchair.com/bitcoin" target="_blank"
                      >区块站3</a
                    ><a href="https://explorer.viabtc.com/btc" target="_blank"
                      >区块站4</a
                    ><a href="https://btc.com/en" target="_blank">区块站5</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="develop_path">
              <p class="title">发展历程和路线</p>
              <div class="course_box">
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2021年10月16日</div>
                  <div class="list_cont">
                    【美国证交会批准首只比特币期货ETF
                    向更广泛的投资者开放加密货币交易】金十数据10月16日讯，据Coindesk报道，在基金发起人经历多年尝试和失败之后，加密货币投资终于向美国大众开放。美国证交会周五首次批准了比特币期货ETF，此前委员会五名成员就该问题举行了会议。今年夏天提交Bitcoin
                    Strategy
                    ETF申请的ProShares最早料在下周一推出首只ETF。此前分析师预计，比特币期货ETF的推出将成为最终推出基于现货市场的比特币ETF的桥梁。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2020年5月12日</div>
                  <div class="list_cont">
                    比特币在区块高度630000处进行第三次减半，奖励减少50%，区块奖励由12.5个BTC减至6.25BTC，通货膨胀率降低至1.79%。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2020年</div>
                  <div class="list_cont">
                    3月9日，比特币核心版本0.19.1发布。
                    6月3日，比特币核心版本0.20.0发布。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2020年3月12日</div>
                  <div class="list_cont">
                    比特币遭遇黑色星期四，当日跌幅最高达43%。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2019年</div>
                  <div class="list_cont">
                    5月2日，比特币核心版本0.18.0发布。
                    8月9日，比特币核心版本0.18.1发布。
                    11月24日，比特币核心版本0.19.0.1发布。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2019年10月25日</div>
                  <div class="list_cont">
                    中共中央政治局提出把区块链作为核心技术自主创新重要突破口，加快推动区块链技术和产业创新发展。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2019年9月23日</div>
                  <div class="list_cont">
                    美国洲际交易所集团（ICE）旗下加密货币衍生品交易所 Bakkt
                    在2019年9月23日正式启动以实物结算的比特币（BTC）期货交易。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2019年6月</div>
                  <div class="list_cont">比特币价格再度突破10000美元。</div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2019年4月</div>
                  <div class="list_cont">
                    比特币价格突然暴涨，一度达到5000美元。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2018年</div>
                  <div class="list_cont">
                    2月26日，比特币核心版本0.16.0发布。
                    3月，闪电网络上线比特币主网。
                    12月25日，比特币核心版本0.17.1发布。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2017年</div>
                  <div class="list_cont">
                    比特币分叉出BTG和BCH两种货币；1月3日，比特币核心版本0.13.2发布。3月8日，比特币核心版本0.14.0发布。9月14日，比特币核心版本0.15.0发布。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2017年12月18日</div>
                  <div class="list_cont">比特币创下2万美元历史新高。</div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2017年12月17日</div>
                  <div class="list_cont">
                    比特币触及19783 .06点美元的高点。
                    在一天结束的时候，比特币将降至19500美元。总的来说，比特币的价格1月1日至12月17日上涨了1824%。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2017年12月10日</div>
                  <div class="list_cont">
                    芝加哥期权交易所全球市场公司（CBOE Global Markets
                    Inc.）在2017年12月10日推出比特币期货交易，其交易代码为“XBT”。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2017年12月</div>
                  <div class="list_cont">闪电网络上线比特币主网。</div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2017年9月4日</div>
                  <div class="list_cont">
                    中国人民银行等七部委联合发布《关于防范代帀发行融资风险的公告》。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2017年8月1日</div>
                  <div class="list_cont">
                    隔离见证激活，比特币第一个分叉币——比特币现金（Bitcoin
                    Cash/BCash）诞生。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2017年6月</div>
                  <div class="list_cont">比特币获得unicode符号₿。</div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2016年7月20日</div>
                  <div class="list_cont">比特币奖励二次减半。</div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2016年7月9日</div>
                  <div class="list_cont">
                    比特币在区块高度420000处进行第二次减半，区块奖励由25 BTC
                    下降为12.5 BTC，通胀率下降为4.17%。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2016年6月</div>
                  <div class="list_cont">
                    民法总则划定虚拟资产保护范围（第十二届全国人大常委会第二十一次会议于2016年6月在北京举行，会议首次审议了全国人大常委会委员长提请的《中华人民共和国民法总则（草案）》议案的说明。草案对网络虚拟财产、数据信息等新型民事权利客体做出了规定，这意味着网络虚拟财产、数据信息将正式成为权利客体，比特币等网络虚拟财产将正式受到法律保护。）
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2016年5月25日</div>
                  <div class="list_cont">
                    日本参议院于2016年5月25日批准了一项监管国内数字货币交易所的法案，法案将比特币归类为一种资产或财产。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2016年4月5日</div>
                  <div class="list_cont">
                    去中心化电子商务协议OpenBazaar的开发者于2016年4月5日发布其首个正式版本软件。OpenBazaar能够让点对点的数字商务成为可能，并使用比特币作为一种支付方式，类似于一个去中心化的“淘宝”。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2016年</div>
                  <div class="list_cont">
                    比特币网络算力超过1EH/S；2月23日，比特币核心版本0.12.0发布。8月23日，比特币核心版本0.13.0发布。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2015年12月16日</div>
                  <div class="list_cont">
                    比特币证券发行（美国证券交易委员会批准在线零售商Overstock通过比特币区块链发行该公司的股票。据Overstock提交给证券交易委员会的S–3申请，该公司希望通过区块链发行最高5亿美元的新证券，包括普通股、优先股、存托凭证、权证、债券等。）
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2015年10月22日</div>
                  <div class="list_cont">
                    欧盟对比特币免征增值税（欧盟法院于2015年10月22日裁定，对于比特币及其他虚拟货币的交易将免征增值税。这一决定对于比特币交易群体而言，将是一次重大的胜利，因为这意味着，他们在接下来的虚拟货币交易中，将无须缴税。）
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2015年发布</div>
                  <div class="list_cont">
                    2月16日，比特币核心版本0.10.0发布。11月13日，比特币核心版本0.11.2发布。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2015年</div>
                  <div class="list_cont">
                    2015年1月26日，比特币公司Coinbase创建的美国第一家持正规牌照比特币交易所正式上线。2017年1月17日，纽约金融服务部门（NYDFS）负责人宣布，已通过比特币交易平台Coinbase的牌照申请。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2014年</div>
                  <div class="list_cont">
                    比特币网络算力达到100PH/S；HMRC（英国税务局）将比特币归类为资产或私人资金，意味着比特币的采矿或交换不会收取增值税；美国政府拍卖超过29000个从丝绸之路没收的比特币，表明比特币不再被视为非法交易货币；进行第一笔比特币衍生品交易；微软、戴尔等接受比特币支付。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2014年12月11日</div>
                  <div class="list_cont">
                    全球计算机巨头微软宣布接受比特币作为一种支付选项，允许消费者用比特币购买其在线平台上的各种数字内容。根据微软官方商店的支付信息页面，美国的消费者可以用比特币为他们的微软账户充值。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2014年7月12日</div>
                  <div class="list_cont">
                    法国发布比特币新规（法国经济和金融部门表示将在当年年底对比特币和其他数字货币的金融机构和个人使用者实施监管措施。“虽然目前虚拟货币的体量不可能对经济体系产生影响，但这些非官方的货币正在发展，并且存在非法或者欺诈的风险。”）
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2014年7月9日</div>
                  <div class="list_cont">
                    波兰财政部副部长沃伊切赫·科瓦尔奇克（Wojciech
                    Kowalczyk）发布了一个文件，确认了比特币在波兰现有的金融法规下可作为一种金融工具。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2014年3月</div>
                  <div class="list_cont">
                    3月中旬央行发布《关于进一步加强比特币风险防范工作的通知》，禁止国内银行和第三方支付机构替比特币交易平台提供开户、充值、支付、提现等服务。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2013年12月18日</div>
                  <div class="list_cont">
                    比特币单价暴跌（中国两大比特币交易平台比特币中国和OKCoin发布公告，宣布暂停人民币充值服务。随后，比特币的单价跌到了2011元人民币。）
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2013年12月5日</div>
                  <div class="list_cont">
                    中国五部委发通知，中国人民银行等五部委发布《关于防范比特币风险的通知》，明确比特币不具有与货币等同的法律地位，不能且不应作为货币在市场上流通使用。通知发出后，当天比特币的单价大跌。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2013年11年29日</div>
                  <div class="list_cont">
                    比特币价格首度超过黄金（比特币在Mt.Gox上的交易价格达到1
                    242美元/比特币，同一时间的黄金价格为1
                    241.98美元/盎司，比特币价格首度超过黄金）。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2013年11月</div>
                  <div class="list_cont">比特币价格飙升到1000美元。</div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2013年</div>
                  <div class="list_cont">
                    出现分叉问题；10月，第一台比特币ATM机问世；发生首起比特币盗窃事件；美国金融犯罪调查合作局(FINCEN)发布了全球第一个虚拟货币管理规范；德国承认比特币合法地位；中国发布《关于防范比特币风险的通知》，明确比特币不具与货币等同的法律地位。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2013年1月</div>
                  <div class="list_cont">专用ASIC阿瓦隆比特币矿机问世。</div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2012年11月28日</div>
                  <div class="list_cont">
                    发生第一次“减半”事件，比特币区块链在完成21万个区块之后，挖矿奖励从50个BTC减半至25个BTC，通胀率由12.5%下降至8.3%。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2012年9月</div>
                  <div class="list_cont">比特币基金创立。</div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2011年</div>
                  <div class="list_cont">
                    官方有历史记载的0.3.21版本上线，支持包括UPNP、以聪为单位等新特性，比特币系统逐渐成熟。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2011年6月</div>
                  <div class="list_cont">
                    比特币历史上第一次重大黑客事件发生，有25000个BTC被盗，当时价值2500美元。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2011年6月14日</div>
                  <div class="list_cont">维基解密推出比特币捐赠地址。</div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2011年4月18日</div>
                  <div class="list_cont">第一个山寨币namecoin（NMC）诞生。</div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2010年</div>
                  <div class="list_cont">
                    Mt . Gox网站建立，Mt .
                    Gox允许用户购买和出售比特币。至2014年2月，它处理了全球70%的比特币交易。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2010年12月12日</div>
                  <div class="list_cont">
                    中本聪在bitcointalk.org论坛上发布了最后一条信息。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2010年12月</div>
                  <div class="list_cont">
                    世界上第一个矿池SlushPool挖出区块。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2010年11月1日</div>
                  <div class="list_cont">
                    Bitcointalk 论坛用户 bitboy
                    发布比特币徽标，以白色和橙色呈现了₿，并以“
                    Rotation：Clockwise
                    14％”（旋转：顺时针旋转14％）的形式保留至今。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2010年9月</div>
                  <div class="list_cont">
                    世界上最早“矿池” Slush's
                    pool，首次挖矿成功；中本聪隐退并将开发权转交给美国人加文·安德森。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2010年8月</div>
                  <div class="list_cont">
                    攻击者利用整数溢出的漏洞凭空创造出1840亿个比特币。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2010年7月</div>
                  <div class="list_cont">
                    出现基于GPU显卡挖矿的软件。Mt.Gox在东京开启交易，至2014年2月，它处理了全球70%的比特币交易。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2010年5月22日</div>
                  <div class="list_cont">
                    加密圈的“披萨节”：2010年5月22日，加密社区成员 Laszlo Hanyecz
                    用 10000 BTC买了两个披萨。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2010年1月15日</div>
                  <div class="list_cont">
                    Bitcointalk论坛成员"dwdollar
                    "提出创建第一个比特币交易所Bitcoinmarket.com。2010年3月17日，Bitcoinmarket.com正式上线。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2009年1月12日</div>
                  <div class="list_cont">
                    第一笔比特币交易：2009年1月12日，中本聪（Satoshi）发送给哈尔芬尼
                    10 比特币作为测试事务。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2009年1月9日</div>
                  <div class="list_cont">
                    比特币发布开源客户端：它可以从SourceForge下载。从这里开始，任何technologically-literate人可以下载客户端和开始采矿对比特币。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2009年</div>
                  <div class="list_cont">
                    名为创世纪的第一个比特币区块被启动，中本聪通过挖矿的方式获得首批50个比特币，标志着比特币网络开始出现，比特币正式诞生。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2008年10月31日</div>
                  <div class="list_cont">
                    中本聪（Satoshi
                    Nakamoto）发表比特币的创世论文：《比特币:一种点对点的现金支付系统》。
                  </div>
                </div>
                <div class="course_list">
                  <div class="list_dot"></div>
                  <div class="list_date">2008年8月18日</div>
                  <div class="list_cont">
                    中本聪（Satoshi Nakamoto）注册Bitcoin.org域名。
                  </div>
                </div>
              </div>
            </div>
            <div class="el-dialog__wrapper" style="display: none">
              <div
                role="dialog"
                aria-modal="true"
                aria-label="dialog"
                class="el-dialog dialogBox"
                style="margin-top: 15vh; width: 600px"
              >
                <div class="el-dialog__header">
                  <span class="el-dialog__title"></span
                  ><button
                    type="button"
                    aria-label="Close"
                    class="el-dialog__headerbtn"
                  >
                    <i class="el-dialog__close el-icon el-icon-close"></i>
                  </button>
                </div>
                <!----><!---->
              </div>
            </div>
          </div>
          <!---->
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
  name: "homeDetail",
  components: {
    TopBanner,
    BottomPage,
  },
};
</script>

<style lang="less">
.homeDetail {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  .homedatail_header {
    margin-top: 30px;
  }
  .homedatail_header .homedatail_head_info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .homedatail_header .homedatail_head_info .head_info_left {
    display: flex;
    align-items: center;
  }
  .homedatail_header .homedatail_head_info .head_info_left img {
    width: 100px;
    height: 100px;
  }
  .homedatail_header .homedatail_head_info .head_info_left .left_coin_info {
    margin-left: 20px;
  }
  .homedatail_header .homedatail_head_info .head_info_left .coin_info_name {
    display: flex;
    align-items: center;
  }
  .homedatail_header .homedatail_head_info .head_info_left .coin_info_name p {
    font-size: 30px;
    color: #101b37;
    line-height: 36px;
    font-weight: 600;
  }
  .homedatail_header
    .homedatail_head_info
    .head_info_left
    .coin_info_name
    .coin_info_collect {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 16px;
    width: 30px;
    height: 30px;
    border-radius: 8px;
    border: 1px solid #b7bac3;
    cursor: pointer;
  }
  .homedatail_header
    .homedatail_head_info
    .head_info_left
    .coin_info_name
    .coin_info_collect
    img {
    width: 18px;
    height: 18px;
  }
  .homedatail_header .homedatail_head_info .head_info_left .coin_info_rank {
    display: flex;
    align-items: center;
    margin-top: 8px;
    font-size: 16px;
    color: #343d55;
    line-height: 24px;
  }
  .homedatail_header .homedatail_head_info .head_info_left .info_rank_label {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    padding: 3px 8px;
    background: rgba(248, 114, 17, 0.08);
    border-radius: 10px;
  }
  .homedatail_header
    .homedatail_head_info
    .head_info_left
    .info_rank_label
    img {
    width: 10px;
    height: 10px;
  }
  .homedatail_header
    .homedatail_head_info
    .head_info_left
    .info_rank_label
    span {
    margin-left: 1px;
    font-size: 10px;
    font-weight: 500;
    color: #f87211;
    line-height: 13px;
  }
  .homedatail_header .homedatail_head_info .head_info_left .coin_info_tabs {
    display: flex;
    align-items: center;
    margin-top: 13px;
  }
  .homedatail_header .homedatail_head_info .head_info_left .info_tabs_item {
    margin-right: 8px;
    padding: 4px 10px;
    background: #f3f3f5;
    border-radius: 4px;
    font-size: 12px;
    color: #7c8291;
    cursor: pointer;
  }
  .homedatail_header .homedatail_head_info .info_right_link {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .homedatail_header .homedatail_head_info .info_right_link .info_right_item {
    padding: 5px 20px;
    margin-left: 10px;
    font-size: 14px;
    color: #101b37;
    border-radius: 8px;
    border: 1px solid #dbdde1;
    cursor: pointer;
  }
  .homedatail_header .homedatail_head_info .info_link_social {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  .homedatail_header .homedatail_head_info .info_link_social img {
    width: 24px;
    height: 24px;
    margin-left: 15px;
  }
  .homedatail_header .homedetail_data {
    display: flex;
    align-items: center;
    margin-top: 40px;
  }
  .homedatail_header .homedetail_data .price {
    font-size: 40px;
    color: #101b37;
    line-height: 48px;
    font-weight: 600;
  }
  .homedatail_header .homedetail_data .rate {
    margin-left: 10px;
    width: 74px;
    height: 30px;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    line-height: 30px;
  }
  .homedatail_header .homedetail_data .rate_price {
    margin-left: 10px;
    font-size: 18px;
    line-height: 26px;
  }
  .homedatail_header .homedetail_end {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
  .homedatail_header .homedetail_end .homedetail_end_left {
    width: 100%;
    border-radius: 8px;
    border: 1px solid #f3f3f5;
  }
  .homedatail_header .homedetail_end .end_left_top {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 96px;
    border-bottom: 1px solid #f3f3f5;
  }
  .homedatail_header .homedetail_end .end_top_item {
    text-align: center;
  }
  .homedatail_header .homedetail_end .homedetail_end_key {
    font-size: 14px;
    color: #7c8291;
    line-height: 24px;
  }
  .homedatail_header .homedetail_end .homedetail_end_val {
    font-size: 16px;
    color: #101b37;
    line-height: 24px;
    font-weight: 600;
  }
  .homedatail_header .homedetail_end .end_left_bottom {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 96px;
  }
  .homedatail_header .homedetail_end .left_bottom_item {
    position: relative;
    padding: 20px 32px;
    width: 33%;
  }
  .homedatail_header .homedetail_end .left_bottom_item .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 28px;
  }
  .homedatail_header .homedetail_end .homedetail_end_key {
    font-size: 14px;
    color: #7c8291;
    line-height: 24px;
  }
  .homedatail_header .homedetail_end .left_bottom_item .homedetail_end_val {
    font-size: 14px;
    font-weight: 400;
  }
  .homedatail_header .homedetail_end .left_bottom_item {
    position: relative;
    padding: 20px 32px;
    width: 33%;
  }
  .homedatail_header .homedetail_end .left_bottom_item .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 28px;
  }
  .homedatail_header .homedetail_end .homedetail_end_key {
    font-size: 14px;
    color: #7c8291;
    line-height: 24px;
  }
  .homedatail_content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
  }
  .homedatail_tabs_content {
    width: 100%;
  }
  .brief_boxs .brief_table {
    padding: 20px 16px;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #f3f3f5;
  }
  .brief_boxs .brief_table .title {
    font-size: 16px;
    color: #101b37;
    line-height: 22px;
    font-weight: 600;
  }
  .brief_boxs .brief_table .coin_introduction {
    margin-top: 16px;
    font-size: 14px;
    color: #343d55;
    line-height: 20px;
  }
  .brief_boxs .brief_table .coin_introduction div {
    color: #1069fb;
    cursor: pointer;
    float: right;
    line-height: 20px;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  .brief_boxs .info_table {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #f3f3f5;
    border-left: 1px solid #f3f3f5;
  }
  .brief_boxs .info_table .info_table_item {
    width: 49%;
    border-bottom: 1px solid #f3f3f5;
    border-right: 1px solid #f3f3f5;
    height: 40px;
    line-height: 40px;
    display: flex;
    align-items: center;
  }
  .brief_boxs .info_table .info_table_item > div:first-child {
    width: 140px;
    height: 100%;
    color: #343d55;
    background: #f9f9fa;
  }
  .brief_boxs .info_table .info_table_laritem > div:first-child {
    width: 140px;
    height: 100%;
    color: #343d55;
    background: #f9f9fa;
  }
  .brief_boxs .info_table .info_table_item > div {
    padding-left: 16px;
    color: #101b37;
    box-sizing: border-box;
  }
  .brief_boxs .info_table .info_table_laritem {
    position: relative;
    width: 100%;
    border-bottom: 1px solid #f3f3f5;
    border-right: 1px solid #f3f3f5;
    height: 40px;
    line-height: 40px;
    display: flex;
    align-items: center;
  }
  .brief_boxs .info_table .info_table_laritem .table_list_box {
    display: flex;
    align-items: center;
  }
  .brief_boxs .info_table .info_table_laritem > div:first-child {
    width: 140px;
    height: 100%;
    color: #343d55;
    background: #f9f9fa;
  }
  .brief_boxs .info_table .info_table_laritem .table_list_box .table_list_item {
    margin-right: 10px;
    padding: 4px 10px;
    background: hsla(223, 9%, 53%, 0.1);
    border-radius: 4px;
    color: #101b37;
    font-size: 12px;
    line-height: 16px;
  }
  .brief_boxs .info_table .info_table_heightitem {
    position: relative;
    width: 100%;
    border-bottom: 1px solid #f3f3f5;
    border-right: 1px solid #f3f3f5;
    display: flex;
    align-items: center;
  }
  .brief_boxs .info_table .info_table_heightitem > div:first-child {
    width: 140px;
    height: 100%;
    color: #343d55;
    background: #f9f9fa;
  }
  .brief_boxs .info_table .info_table_heightitem > div {
    display: flex;
    align-items: center;
    padding-left: 16px;
    color: #101b37;
    box-sizing: border-box;
  }
  .brief_boxs .info_table .info_table_plate .plate_item {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-right: 10px;
    padding: 4px 10px;
    background: hsla(223, 9%, 53%, 0.1);
    border-radius: 4px;
    color: #101b37;
    font-size: 12px;
    line-height: 16px;
  }
  .brief_boxs .info_table .info_table_plate .plate_item span {
    margin-left: 10px;
  }
  .brief_boxs .info_table .info_table_laritem .table_list_box .more {
    position: absolute;
    right: 10px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #1069fb;
    line-height: 20px;
    cursor: pointer;
  }
  .brief_boxs .info_table .info_table_laritem > div {
    padding-left: 16px;
    color: #101b37;
    box-sizing: border-box;
  }
  .brief_boxs .develop_path {
    margin-top: 16px;
    max-height: 800px;
    overflow: scroll;
    padding: 20px 16px;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #f3f3f5;
  }
  .brief_boxs .develop_path .title {
    font-size: 16px;
    color: #101b37;
    line-height: 22px;
    font-weight: 600;
  }
  .brief_boxs .develop_path .course_box {
    margin-top: 16px;
  }
  .brief_boxs .develop_path .course_box .course_list {
    padding: 15px 0 0 15px;
    box-sizing: border-box;
    border-left: 1px dashed #dbdde1;
    margin-top: 5px;
    margin-left: 5px;
    position: relative;
    font-size: 14px;
    display: flex;
  }
  .brief_boxs .develop_path .course_box .course_list .list_dot {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid #1069fb;
    left: -6px;
    top: 19px;
    background: #fff;
  }
  .brief_boxs .develop_path .course_box .course_list .list_date {
    color: #1069fb;
    width: 120px;
    margin-right: 17px;
  }
  .brief_boxs .develop_path .course_box .course_list .list_cont {
    color: #101b37;
    padding-bottom: 20px;
    border-bottom: 1px solid #f3f3f5;
    flex: 1;
  }
  .brief_boxs .table_title {
    margin-top: 40px;
    font-size: 16px;
    color: #101b37;
    line-height: 22px;
    font-weight: 600;
  }
  .brief_boxs .info_table .info_table_laritem .table_list_box {
    display: flex;
    align-items: center;
  }
  .brief_boxs .info_table .info_table_laritem a {
    margin-right: 30px;
    color: #1069fb;
  }
}
</style>
