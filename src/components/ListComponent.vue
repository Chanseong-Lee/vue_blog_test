<template>
    <div v-for="(blogData, i) in blogDataList" :key="i">
        <h5><router-link :to="`detail/${blogData.number}`">{{ blogData.title }}</router-link></h5>
        <!-- <h5><router-link :to="{name:'detail', params:{id : blogData.number}}">{{ blogData.title }}</router-link></h5> -->
        <p>{{ blogData.date }}</p>
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
    
</style>