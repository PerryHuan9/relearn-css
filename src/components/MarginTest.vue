<template>
  <div class="mTest">
    <div class="mTest-change">
      <div class="mTest-change-son"></div>
    </div>
    <div class="mTest-list">
      <ul>
        <li>第一列</li>
        <li>第二列</li>
        <li>第三列</li>
      </ul>
    </div>
    <div>
      <span style="background-color: red;margin-right: 20px">左边</span>
      <span style="background-color: blue;margin-left: 20px">右边</span>
    </div>
    <div style="height: 200px;overflow: auto">
      <img src="../assets/img/test.jpg" height="300" alt="" style="margin-bottom: 50px">
    </div>
    <div class="mTest-equalHeight">
      <div class="mTest-equalHeight-left">
        <h4>正方观点</h4>
        <p>观点1</p>
      </div>
      <div class="mTest-equalHeight-right">
        <h4>反方观点</h4>
        <p>观点2</p>
      </div>
    </div>
    <!--在元素的尺寸表现为充分利用可利用的空间时，使用margin是可以改变元素的大小的
    下面内部的p元素因为为块级元素，所以充分利用可利用可用空间，
    这时只要其左右margin设为负值便会使p元素变大，垂直方向只有绝对定位才会出现这种情况-->
    <div style="width:400px;height:200px;background-color:red;
      margin-top:100px;margin-left: 100px">
      <p style="height: 100px;margin: 0 -50px;background-color: rgba(0,128,0,0.4)"></p>
    </div>
    <div style="width: 300px;height:200px;background-color: yellow;position: relative">
      <p style="position: absolute;left: 0;right: 0;top: 0;
        bottom: 0;background-color: rgba(0,0,255,0.25);margin-top: -50px"></p>
    </div>
    <!--利用margin消除ul li的最后一个margin,ul必须满足充分利用可利用空间的条件，否则无法改变内部尺寸，即无法消除-->
    <div class="mTest-ul">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
    <p></p>
    <span style="background-color: red;margin-bottom: 100px;height: 100px;">12312312312</span>
    <div style="background-color: blue;margin-top: 100px;height: 100px;"></div>
    <span style="position: absolute" class="float-span">浮动的元素其display变为block</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'MarginTest',
    mounted() {
      const span = document.querySelector('.float-span');
      console.log('值：', window.getComputedStyle(span).display);
    }
  };
</script>

<style type="text/less" lang="less" scoped>
  ul {
    margin: 0;
    padding: 0;
  }

  .mTest {
    &-change {
      margin: 50px auto;
      width: 300px;
      height: 100px;
      background-color: red;

      &-son {
        margin-top: 100px;
        margin: 0 -50px;
        background-color: rgba(20, 20, 20, 0.39);
        height: 100%;
        margin-bottom: -20px;
      }
    }

    &-list {
      ul {
        display: inline-block;
        list-style: none;
        /*父类margin使列表真正两端对齐*/
        margin-right: -50px;

        &::after {
          content: '';
          display: block;
          clear: both;
        }

        li {
          display: inline-block;
          width: 90px;
          float: left;
          margin-right: 50px;
          height: 90px;
          background-color: red;
        }
      }
    }

    &-equalHeight {
      overflow: hidden;

      &::after {
        content: '';
        display: table;
        clear: both;
      }

      &-left, &-right {
        float: left;
        width: 50%;
        margin-bottom: -9999px;
        padding-bottom: 9999px;
      }

      &-left {
        background-color: red;
      }

      &-right {
        background-color: blue;
      }
    }
    &-ul {
      margin-top: 50px;
      margin-bottom: 50px;
      width: 700px;
      display: inline-block;
      ul {
        background-color: black;
        margin-right: -50px;
        li {
          width: 100px;
          height: 200px;
          background-color: green;
          display: inline-block;
          margin-right: 50px;
        }
      }
    }
  }
</style>
