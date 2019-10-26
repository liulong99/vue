<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
    export default {
        name: 'App',
        mounted(){
            window.addEventListener('unload',this.saveState);
        },
        methods:{
            saveState(){
                sessionStorage.setItem('userState',JSON.stringify(this.$store.state.user));//JSON.stringify() 将对象转换成字符串
            }
        }
    }
</script>
