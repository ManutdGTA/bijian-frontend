<template>
  <div class="notice_box">
    <div class="notice_box_left">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAR5JREFUOE+t1D9Lw0AYBvDnySUIrbTn6ih00kV3BXcH0bmzTf0AduoH0FXS6NbFz1EHNx0EB0Gko0MRE3FqLr4SqH+qsZwxtybvL3fvk/eIkhZLcmAN1fakMafwMAr4kvdxK0i3zQ5E+oC7FfV4XgAS6pbpguwC4kCwGYXe4G9QU6p6Pu0DsvtROIEW/GTdUe7o8Zi378+mjqZ9cw/I0q8BZNCre6GVuQFZoVErT6eMs/e/QYnMTHGyo/r+eI0pL4XOQdxTR4WhrFD7yTUEwyj0tv8PkcMocItDujVeBXgljtOJA3WYsyOLZofeoN42ZxTZYOou5zZ7qtEz4kdTqrUKFp9PeJcb/8/Eyvghv6gljMinVsrQ2lw1VtNvA70Bxd2NE72nXqoAAAAASUVORK5CYII="
        alt=""
      />
      <el-carousel class="notice_box_notice" direction="vertical" height="20px">
        <el-carousel-item v-for="item in noticeData" :key="item.id">
          <p>{{ item.text }}</p>
        </el-carousel-item>
      </el-carousel>
      <a href="/Announcement" class=""
        ><div class="more">
          查看更多
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAALdJREFUOE9jZKASYKSSOQxDyCCR7B9qv/+y6H6cwbKWGO/j9Bp/5p+ljAz/wxiZGGPfT2VZQcgw3GGU9p9LgPnPFgYGBltiDMMf2CQYRjjWiDSMsEEM/xkFMv/OZWD4n8jAyFT3YRpzM7bwImAQ2JDZDAz/kxn+MzR8mMHaiCvQ8RhEvCEgw3EaJJD1ZzLD//85hFwCcyFug3L+OzD+/WP1fjprG6E0hNdFxGhGVkNErBFn5OAzCADbEkMTlrbgGAAAAABJRU5ErkJggg=="
            alt=""
          /></div
      ></a>
    </div>
    <div class="notice_box_right">
      <a href="javascript:;">以太坊销毁</a><a href="javascript:;">币理财</a
      ><a href="javascript:;">Ahr999</a><a href="javascript:;">BTC机构持仓</a
      ><a href="javascript:;">灰度基金数据</a
      ><a href="javascript:;">期货大数据</a><a href="javascript:;">币种涨幅榜</a
      ><a href="javascript:;">新手教程</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "NoticeBox",
  data() {
    return {
      noticeData: [
        { id: 1, text: "币见行情APP更新提醒" },
        { id: 2, text: "全网最全最新的币圈事件日历" },
      ],
    };
  },
};
</script>
<style lang="less">
.notice_box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 21px;
}
.notice_box .notice_box_left,
.notice_box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.notice_box .notice_box_left img {
  width: 18px;
  height: 18px;
}
.notice_box .notice_box_left .notice_box_notice {
  width: 230px;
  margin-left: 10px;
}
.notice_box .notice_box_left a {
  margin-left: 27px;
  font-size: 12px;
  color: #1069fb;
  line-height: 17px;
}
.notice_box .notice_box_left .more {
  display: flex;
  align-items: center;
}
.notice_box .notice_box_left .more img {
  margin-top: -2px;
  margin-left: -2px;
}
.notice_box .notice_box_right {
  display: flex;
  align-items: center;
}
.notice_box .notice_box_right a {
  position: relative;
  margin-left: 22px;
  font-size: 12px;
  color: #1069fb;
  line-height: 17px;
}
.notice_box .notice_box_right a:after {
  content: " ";
  height: 16px;
  border-left: 1px solid #dbdde1;
  position: absolute;
  right: -10px;
}
.notice_box .notice_box_right a:last-child:after {
  content: " ";
  height: 16px;
  border-left: 0px;
  position: absolute;
  right: -10px;
}
</style>
