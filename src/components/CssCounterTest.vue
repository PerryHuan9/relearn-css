<template>
  <div class="ccTest">
    <p>counter-reset设置计数器初始值：</p>
    <p class="ccTest-counter1 ccTest-counter"></p>
    <p class="ccTest-counter2 ccTest-counter"></p>
    <p class="ccTest-counter3 ccTest-counter"></p>
    <div class="ccTest-counter4">
      <ul class="first">
        <li>第一章
          <ul class="first">
            <li>第一节</li>
            <li>第二节</li>
            <li>第三节</li>
          </ul>
        </li>
        <li>第二章
          <ul class="first">
            <li>第一节</li>
            <li>第二节</li>
            <li>第三节</li>
          </ul>
        </li>
        <li>第三章</li>
        <li>第四章
          <ul class="first">
            <li>第一节</li>
            <li>第二节</li>
            <li>第三节</li>
            <li>第四节</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'CssCounterTest'
  };
</script>

<style type="text/less" lang="less" scoped>
  .ccTest {
    &-counter {
      font-size: 25px;
      text-align: center;
      counter-reset: id 1 class 2;
      counter-increment: id class;
    }
    &-counter1 {
      color: red;
      &::before {
        content: counter(id);
        counter-increment: id;
      }
      &::after {
        display: block;
        content: counter(class);
        counter-increment: class;
      }
    }
    &-counter2 {
      color: blue;
      &::before {
        content: counter(counter, lower-roman);
        counter-increment: counter 2;
      }
      &::after {
        display: block;
        content: counter(counter) '\A' counter(counter);
        counter-increment: counter;
        white-space: pre;
      }
    }
    &-counter3 {
      color: green;
      &::before {
        content: counter(counter, lower-roman);
        counter-increment: counter 2;
      }
      &::after {
        display: block;
        content: counter(counter) '\A' counter(counter);
        counter-increment: counter;
        white-space: pre;
      }
    }
    &-counter4 {
      ul {
        list-style: none;
        counter-reset: count;
        li {
          counter-increment: count;
          &::before {
            content: counters(count, '-') '. ';
          }
        }
      }
    }
  }
</style>
