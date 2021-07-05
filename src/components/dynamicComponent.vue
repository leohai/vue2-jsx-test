<script>
export default {
  name: 'HelloWorld',
  // functional: true,
  props:{
    msg:{
      type:String
    }
  },
  data(){
    return {
      inputValue:"222",
      listData:["这是li元素1", "这是li元素2", "这是li元素3", "这是li元素4", "这是li元素5"]
    }
  },
  methods:{
    change(){
      this.$emit('change', "调用了父组件的change函数")
    },
    deleteItem(index){
        console.log(index,333)
      this.listData.splice(index,1);
    }
  },
  /**
   * vue  jsx语法  https://github.com/vuejs/jsx 
   * 详见  https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth
   * 
   */
  render() {
    return (
      <div>
        <ul>
          {this.listData.map((item,index) => <li key={index} onClick={this.deleteItem.bind(this,index)}>{item}</li>)}
        </ul>
        <div>
            双向绑定------------{this.inputValue}
            <input value={this.inputValue} onInput={e => this.inputValue = e.target.value}></input>
        </div>
      </div>
      )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  color: rgba(0, green, 0, 0.2);
  list-style: none;
}
</style>
