<template>
  <div class="carouselContent">
    <el-carousel height="100px">
      <el-carousel-item v-for="v in carouselData" :key="v.id">
        <img :src="v.imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: "CarouselContent",
  data() {
    return {
      carouselData: [
        {
          id: 1,
          imgUrl:
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221021/6c79f7e0d80248cb9845a8c58fdf4831.png",
        },
        {
          id: 2,
          imgUrl:
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221021/6c79f7e0d80248cb9845a8c58fdf4831.png",
        },
        {
          id: 3,
          imgUrl:
            "http://bjhq-dev-data.oss-cn-shenzhen.aliyuncs.com/20221021/6c79f7e0d80248cb9845a8c58fdf4831.png",
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
.carouselContent {
  width: 1200px;
  margin: 0 auto;
  .bannerBox img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
}
</style>
