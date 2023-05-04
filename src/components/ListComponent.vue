<template>
    <div class="card m-3" v-for="(blogData, i) in blogDataList" :key="i">
        <h6 class="card-header">
            {{ blogData.date }}
        </h6>
        <div class="card-body">
            <!-- $route : 현재경로의 다양한 정보, $router : 페이지 이동관련 기능-->
            <h5 class="card-title list-title" @click="$router.push(`/detail/${blogData.number}`)">{{ blogData.title }}</h5>
            <!-- <h5><router-link :to="`detail/${blogData.number}`">{{ blogData.title }}</router-link></h5> -->
            <!-- <h5><router-link :to="{name:'detail', params:{id : blogData.number}}">{{ blogData.title }}</router-link></h5> -->
        </div>
    </div>
</template>
<script>
export default {
    name:'ListComponent',
    props: {
        blogDataList: Array
    }
}
</script>
<style>
    a {
        text-decoration: none;
    }
    .list-title{
        color:darkslateblue
    }
    .list-title:hover{
        color: red;
        cursor: pointer;
    }

</style>