<template>
  <div class="home">
    <header class="home-header">
      <img alt="Vue logo" src="../assets/logo.png">
    </header>
    <div class="home-content">
      <nav>
        <ul>
          <li><router-link :to="{name: 'view whTest'}">宽高测试</router-link></li>
          <li><router-link :to="{name: 'view mhTest'}">最大高度</router-link></li>
          <li><router-link :to="{name: 'view cTest'}">content测试</router-link></li>
          <li><router-link :to="{name: 'view ccTest'}">CSS Counter测试</router-link></li>
          <li><router-link :to="{name: 'view pTest'}">padding测试</router-link></li>
          <li><router-link :to="{name: 'view mTest'}">margin测试</router-link></li>
        </ul>
      </nav>
      <div class="home-content-view">
           <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'home',
  };
</script>
<style type="text/less" lang="less">
  .home {
    &-header {
      text-align: center;
      background-color: aquamarine;
    }

    &-content {
      nav {
        padding: 10px 20px;
        background-color: #141414;
        ul {
          list-style: none;
          li {
            margin-left: 20px;
            display: inline-block;
            .router-link-active {
              color: #fffeda;
            }
            a {
              text-decoration: none;
              color: white;
              &:hover {
                color: #fffeda;
              }
            }
          }
        }
      }

      &-view {
        text-align: center;
      }
    }
  }
</style>
