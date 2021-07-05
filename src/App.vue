<template>
  <div id="app">
    <el-button type="pramary" >更新</el-button>
    <h2>这是静态组件</h2>
    <static-component :listData="listData" @select-change="deleteItem" @click="sum" class="ddd" @change="update" style="color:skyblue;" nativeAttrs="这是原生静态属性">求和</static-component>
    <hr>
    <h2>这是动态组件</h2>
    <dynamic-component></dynamic-component>
    <button @click="showTips">点击提示</button>
    <!-- <router-view/> -->
  </div>
</template>

<script>  
import staticComponent from './components/staticComponent.vue';
import dynamicComponent from './components/dynamicComponent';
export default {
  name: 'App',
  components:{
    staticComponent,
    dynamicComponent
  },
  data(){
    return{
      listData : ["这是li元素1", "这是li元素2", "这是li元素3", "这是li元素4", "这是li元素5"]
    }
  },
  methods:{
    deleteItem(index){
      console.log(index,222)
      this.listData.splice(index,1)
    },
    update(msg){
      console.log(msg)
    },
    sum(a, b){
      console.log(123)
    },
    showTips(){
      this.$message( {type:"success",message:"aaa",duration:3000} )
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
