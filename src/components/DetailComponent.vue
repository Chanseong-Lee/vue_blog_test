<template>
    <!-- 라우터에 접근가능한 객체 $route
        {{$route.params.id}} 여기서 id는 
        router.js에 path에 :뒤에 정한 변수명
    -->
    <div class="card m-3">
        <h4 class="card-header">상세페이지</h4>
        <div class="card-body">
            <h5 class="card-title">{{ blogDataList[$route.params.id].title}}</h5>
            <p class="card-text text-muted">{{ blogDataList[$route.params.id].content }}</p>
            <button class="m-1" @click="routePath('author')">작가소개</button>
            <button class="m-1" @click="routePath('comment')">댓글보기</button>
            <button class="m-1" @click="routePath('list')">뒤로가기</button>
        </div>
        <!--children router-->
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'DetailComponent',
    props: {
        blogDataList: Array
    },
    methods:{
        routePath(routeName){
            this.$router.push({
                name: routeName,
            })
        }
    }
}
</script>
<style>
    
</style>