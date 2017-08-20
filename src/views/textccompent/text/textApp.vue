<template>
  <div class="parent">
    <h1>父组件</h1>
    <Child v-bind:parentToChild="parentMsg"></Child>
    <slide-bar :spopslide="popslide" :slide="slides"   @change-pop="changePop">侧边栏</slide-bar>
  </div>
</template>

<script>
  import Child from 'components/Child.vue';
    import SlideBar from 'components/SlideBar.vue'
  export default{
     name:"parent",
    data(){
      return {
        parentMsg:'父组件向子组件传值',
        slides:'侧边栏传递的信息',
        popslide:false
      }
    },
    components: {Child,SlideBar},
    methods:{
       'changePop' (msg) {
      this.popslide = !this.popslide;
    }
    }
  }
</script>

<style lang="less">

img{
	max-width:100%;
}

</style>