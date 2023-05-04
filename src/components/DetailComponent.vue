<template>
    <!-- 라우터에 접근가능한 객체 $route
        {{$route.params.id}} 여기서 id는 
        router.js에 path에 :뒤에 정한 변수명
    -->
    
    <div class="mt-4">
        <h4>상세페이지</h4>
        <h5>{{ blogDataList[$route.params.id].title}}</h5>
        <p>{{ blogDataList[$route.params.id].content }}</p>
    </div>
</template>
<script>
export default {
    name:'DetailComponent',
    props: {
        blogDataList: Array
    }
}
</script>
<style>
    
</style>