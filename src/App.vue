<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Vuelog</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/list" class="nav-link"> List </router-link>
            <!-- <a class="nav-link" href="#">Features</a> -->
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  <div class="mt-4">
    <!-- routing에 등록한 component들이 적절한 path입력하면 나온다 -->
    <router-view :blogDataList="blogDataList"></router-view>
  </div>

</template>

<script>
/* 블로그 데이터 리스트 */
import blogDataList from './assets/blogDataList.js'

export default {
  name: 'App',
  data(){
    return {
      blogDataList: blogDataList
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
