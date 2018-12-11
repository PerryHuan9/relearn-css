<template>
  <div class="test">
    <div class="box rel">
      <div class="child">高度160px</div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">

  export default {
    name: 'WidthHeightTest',
  };
</script>

<style type="text/less" lang="less" scoped>
  .test {
    .box {
      height: 160px;
      /*padding: 30px;*/
      width: 300px;
      margin: 100px;
      box-sizing: border-box;
      background-color: #beceeb;
    }
    .child {
      height: 100%;
      background: #cd0000;
    }
    .rel {
      position: relative;
    }
    .rel > .child {
      width: 100%;
      position: absolute;
    }

  }
</style>
