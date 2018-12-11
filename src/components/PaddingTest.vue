<template>
  <div class="pTest">
    <div class="pTest-inline">
      <p>header</p>
      <span>span元素的padding</span>
      <span>span2元素</span>
      <p>footer</p>
    </div>
    <div class="pTest-verLine">
      <a href="#hash">登录</a><a href="">注册</a>
    </div>
    <h3><span id="hash">我是标题</span></h3>
    <div style="width: 50px">
       <div style="padding: 50%;background-color: red;" ></div>
    </div>
    <div class="pTest-percent">
      <img src="../assets/img/cover.jpg" alt="">
    </div>
    <div style="height: 1000px"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'PaddingTest'
  };
</script>

<style type="text/less" lang="less" scoped>
  .pTest {
    width: 1500px;
    &-inline {
      overflow: auto;
      p {
        height: 50px;
        padding: 30px;
        background-color: blue;
      }
      span {
        padding: 30px;
        background-color: rgba(255, 0, 0, 0.38);
      }
    }
    &-verLine {
      height: 500px;
      border-bottom: 1px solid red;
      a {
        text-decoration: none;
        color: darkgray;
        &+a::before {
          content: '';
          font-size: 0;
          border-left: 1px solid black;
          margin-left: 6px;
          padding: 15px 3px 5px;
        }
      }
    }
    h3 {
      line-height: 30px;
      &>span{
        padding-top: 100px;
      }
    }
    &-percent {
      position: relative;
      padding: 10% 50%;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
      }
    }
  }
</style>
