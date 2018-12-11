<template>
  <div class="mh-test">
    <input id="check" type="checkbox">
    <p>个人觉得，display:table-cell最强的应用是可以任意个数列表的等宽效果。</p>
    <div class="element">
      <p>display:table-cell其他一些应用，例如，两栏自适应布局，
         垂直居中效果等等都是可以通过其他技术手段模拟出来的，但是，
         根据列表个数自动等宽的效果，其他CSS是很难模拟的，尤其当需要兼容IE8浏览器的时候。</p>
    </div>
    <label for="check" class="check-in">更多↓</label>
    <label for="check" class="check-out">收起↑</label>
    <span class="float-span">我是浮动</span>
    <span>
      我在浮动之后我在浮动之后我在浮动之后我在浮动之后我在浮动之后我在浮动之后
      我在浮动之后我在浮动之后我在浮动之后我在浮动之后我在浮动之后我在浮动之后
      我在浮动之后我在浮动之后我在浮动之后我在浮动之后我在浮动之后我在浮动之后
    </span>
    <div style="background-color: red"><span style="display: inline-block"></span></div>
    <img>
  </div>

</template>

<script>
  export default {
    name: 'TestMaxHeight'
  };
</script>

<style type="text/less" lang="less" scoped>
  .mh-test {
    max-width: 400px;

    img {
      width: 200px;
      height: 300px;
    }

    input {
      display: inline;
      width: 100%;
    }

    .element {
      max-height: 0;
      overflow: hidden;
      transition: max-height .25s;
    }

    :checked {
      & ~ .element {
        max-height: 666px;
      }

      & ~ .check-in {
        display: none;
      }

      & ~ .check-out {
        display: block;
      }
    }

    .check-in {
      display: block;
    }

    .check-out {
      display: none;
    }

    .float-span {
      color: red;
      height: 100px;
      float: left;
    }

  }


</style>
