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
    <div>
      adjkasdjka
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'MarginTest'
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
  }
</style>
