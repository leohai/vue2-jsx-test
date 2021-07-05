<script>
export default {
  name: 'HelloWorld',
  functional: true,
  props:{
    listData:{
      type:Array
    }
  },
  /**
   * jsx 语法  <div {...ontext.data.attrs} >  解构剩余属性 。
   * 但vue使用jsx 需要适应Vue Data Object  https://github.com/vuejs/jsx 格式:<div {...{ attrs:context.data.attrs}} 
   * 详见 https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth
   * 
   */
  // ontext 可以解构{props, data, props, children, parent} 
  render(createElement, context ) {
    console.log(context);
    // console.log(context.data.attrs);
    return (
      <div>
        <div>{context.data.attrs.nativeAttrs}</div>
        <ul {...{ attrs:context.data.attrs}} {...{ style:context.data.staticStyle}}>
          {context.props.listData.map((item,index) => <li onClick={context.listeners['select-change'].bind(context,index)}>{item}</li>)}
        </ul>
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
