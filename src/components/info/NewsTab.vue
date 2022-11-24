<template>
  <div class="news">
    <div class="news_tabs">
      <div class="news_tabs_item select">头条</div>
      <div class="news_tabs_item">7X24快讯</div>
      <div class="news_tabs_item">新闻</div>
      <div class="news_tabs_item">政策</div>
      <div class="news_tabs_item">技术</div>
      <div class="news_tabs_item">区块链</div>
      <div class="news_tabs_item">研究</div>
      <div class="news_tabs_item">教程</div>
    </div>
    <div class="news_list">
      <div class="news_list_item">
        <div class="list_item_img">
          <img src="@/assets/news.png" alt="" />
        </div>
        <div class="list_item_info">
          <p>浅谈以太坊合并如何影响质押者的收入和税收</p>
          <div class="info_dec">
            原文作者：Seun Gbri&nbsp;原文编译：0x11，Foresight
            News史蒂芬·柯维曾说，生活中有三个东西永恒不变：变化、选择和原则。但是，我们要添加第四个：税收。加密世界中几乎每个人都在谈论合...
          </div>
          <div class="info_end">
            <div class="info_end_tab">Odaily星球日报</div>
            <div class="info_end_time">2022-11-23</div>
          </div>
        </div>
      </div>
      <div class="news_list_item">
        <div class="list_item_img">
          <img src="@/assets/news.png" alt="" />
        </div>
        <div class="list_item_info">
          <p>浅谈以太坊合并如何影响质押者的收入和税收</p>
          <div class="info_dec">
            原文作者：Seun Gbri&nbsp;原文编译：0x11，Foresight
            News史蒂芬·柯维曾说，生活中有三个东西永恒不变：变化、选择和原则。但是，我们要添加第四个：税收。加密世界中几乎每个人都在谈论合...
          </div>
          <div class="info_end">
            <div class="info_end_tab">Odaily星球日报</div>
            <div class="info_end_time">2022-11-23</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="less" scoped>
.news {
  width: 1200px;
  margin: 0 auto;
}
.news .news_tabs {
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.news .news_tabs .news_tabs_item.select,
.news .news_tabs .news_tabs_item:hover {
  color: #1069fb;
  background: rgba(16, 105, 251, 0.1);
}
.news .news_tabs .news_tabs_item {
  margin-right: 16px;
  padding: 7px 16px;
  font-size: 16px;
  color: #585f72;
  line-height: 22px;
  background: #f3f3f5;
  border-radius: 8px;
  cursor: pointer;
}
.news .news_list {
  margin-top: 20px;
  min-height: 200px;
}
.news .news_list .news_list_item {
  display: flex;
  align-items: center;
  width: 1200px;
  padding: 20px 0;
  box-sizing: border-box;
  cursor: pointer;
}
.news .news_list .list_item_img {
  width: 249px;
  height: 140px;
  border-radius: 10px;
  margin-right: 20px;
}
.news .news_list .list_item_img img {
  width: 249px;
  height: 140px;
}
.news .news_list .list_item_info p {
  font-size: 18px;
  color: #101b37;
  line-height: 25px;
  font-weight: 600;
}
.news .news_list .list_item_info .info_dec {
  margin-top: 10px;
  height: 48px;
  font-size: 16px;
  color: #343d55;
  line-height: 24px;
}
.news .news_list .list_item_info .info_end {
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.news .news_list .list_item_info .info_end_tab {
  padding: 2px 6px;
  background: #f3f3f5;
  border-radius: 4px;
  font-size: 12px;
  color: #7c8291;
}
.news .news_list .list_item_info .info_end_time {
  margin-left: 10px;
  font-size: 12px;
  color: #7c8291;
}
</style>
