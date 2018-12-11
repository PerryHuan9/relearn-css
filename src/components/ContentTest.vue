<template>
  <div class="content-test">
    <div class="content-test-box" ref="box"><i class="bar"></i>
      <i class="bar"></i>
      <i class="bar"></i>
      <i class="bar"></i>
    </div>
    <p><button @click="handleAddBar">增加一条</button></p>
    <span>正在加载中<dot>...</dot></span>
  </div>
</template>
<script type="text/ecmascript-6">
  import _ from 'lodash';

  export default {
    name: 'ContentTest',
    inheritAttrs: false,
    methods: {
      initBar() {
        const children = this.$refs.box.childNodes;
        _.each(children, node => {
          node.style.height = `${Math.ceil(256 * Math.random())}px`;
          node.style.backgroundColor = `#${(`${Math.random()}`).slice(-6)}`;
        });
      },
      handleAddBar() {}
    },
    mounted() {
      this.initBar();
    }
  };
</script>
<style type="text/less" lang="less" scoped>
  .content-test {
    &-box {
      width: 256px;
      height: 256px;
      text-align: justify;
      border-bottom: 1px dashed lightsteelblue;
      &::before {
        content: '';
        display: inline-block;
        width: 100%;
        line-height: 20px;
      }
      &::after {
        content: '';
        display: inline-block;
        width: 100%;
        line-height: 20px;
      }
      .bar {
        display: inline-block;
        width: 20px;
        height: 0;
        line-height: 1.5;
      }
    }
    dot {
      display: inline-block;
      height: 16px;
      line-height: 16px;
      vertical-align: 5px;
      overflow: hidden;
      &::before {
        content: '...\A..\A.';
        display: inline-block;
        font-size: 30px;
        white-space: pre-wrap;
        color: red;
        animation:loading 3s infinite step-start both ;
      }
    }
    @keyframes loading {
      33% {transform: translateY(-32px)}
      66% {transform: translateY(-16px)}
   }

  }
</style>
