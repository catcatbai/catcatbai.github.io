<template>
  <div class="about">
    <v-container class="container">
      <v-layout align-center justify-center row>
        <v-card class="card">
          <h3 class="stress">基本信息</h3>
          <hr>
          <div class="Grid">
            <p class="Grid-cell u-1ofn">Wechat</p>
            <p class="Grid-cell">baitao894164233</p>
          </div>
          <div class="Grid">
            <p class="Grid-cell u-1ofn">Email</p>
            <p class="Grid-cell">894164233@qq.com</p>
          </div>

          <h3 class="stress">教育经历</h3>
          <hr>
          <div class="Grid">
            <p class="Grid-cell u-1ofn">2013.09 - 2017.07</p>
            <p class="Grid-cell u-1ofn">软件工程</p>
            <p class="Grid-cell u-1ofn">学士</p>
            <p class="Grid-cell">河南大学</p>
          </div>
          <h3 class="stress">个人博客</h3>
          <hr>
<!--          <div class="Grid">-->
<!--            <p class="Grid-cell u-1ofn">-->
<!--              <a href="https://blog.csdn.net/grape875499765" target="_blank">CSDN</a>-->
<!--            </p>-->
<!--            <p class="Grid-cell">阅读量 20W 左右的 CSDN 博客，早期笔记放于此处</p>-->
<!--          </div>-->
          <div class="Grid">
            <p class="Grid-cell u-1ofn">
              <a href="https://catcatbai.github.io/" target="_blank">Catcatbai's Blog</a>
            </p>
            <p class="Grid-cell">部署于 GitHub Pages，通过 issues 发布博客，包含文章、笔记</p>
          </div>
          <div class="Grid">
            <p class="Grid-cell u-1ofn">
              <a href="https://github.com/catcatbai" target="_blank">GitHub</a>
            </p>
<!--            <p class="Grid-cell">-->
<!--              包含博客-->
<!--              <a-->
<!--                href="https://github.com/catcatbai/catcatbai.github.io/tree/dev"-->
<!--                target="_blank"-->
<!--              >源码</a>-->
<!--              ，个人 slides 库-->
<!--              <a-->
<!--                href="https://github.com/catcatbai/presentation"-->
<!--                target="_blank"-->
<!--              >presentation</a>-->
<!--              ，高清电子书-->
<!--              <a-->
<!--                href="https://github.com/catcatbai/awesome-books"-->
<!--                target="_blank"-->
<!--              >awesome-books</a>-->
<!--              等-->
<!--            </p>-->
          </div>
          <h3 class="stress">专业技能</h3>
          <hr>
          <p>• 熟练使用 Java，熟悉语言特性，有较多项目经验</p>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>
<style scoped>
.card {
  width: 100%;
  padding: 20px 40px 40px 40px;
}
.stress {
  color: #3692d9;
  font-weight: 500;
  margin-top: 10px;
}
h2 {
  font-size: 36px;
  line-height: 60px;
}
h3 {
  line-height: 36px;
}
p {
  font-size: 15px;
  margin: 0px;
  line-height: 30px;
}
.Grid {
  display: flex;
  flex-wrap: wrap;
}
.Grid-cell {
  flex: 1;
}
.Grid-cell.u-1ofn {
  flex: 0 0 20%;
}
@media only screen and (max-width: 720px) {
  p {
    font-size: 14px;
  }
  .container {
    padding: 0px;
  }
  .card {
    width: 100%;
    padding: 10px 30px 30px 30px;
  }
  .Grid-cell {
    flex: auto;
  }
  .Grid-cell.u-1ofn {
    flex: 0 0 50%;
  }
}
</style>

