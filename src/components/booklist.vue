<!--组件-->
<template>
  <div class="booklist">
    <h2>{{bookListName}}</h2>
    <ul class="soldOut">
      <li v-for="item in soldOutBook" v-if="item.isDel" v-on:click='childClick'>
        {{item.name}}<span class="tips-soldout">售罄</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'booklist',
    props: ['soldOutBook'], //父组件数据，传递给子组件
    data() {
      return {
        bookListName: '已售罄书籍',
        msg:'儿子叫爹'
      }
    },
    methods: {
      childClick: function () {
        //触发父组件上的自定义事件
        this.$emit('child-tell-something',this.msg);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2{
    font-size:16px;
    color:#666;
    font-weight: normal;
  }
  .soldOut{
  width:210px;
  margin:0 auto;
  font-size:12px;
  color:#999;
  text-align: left;
  list-style: none;
}
.soldOut li{
  margin:10px 0;
  cursor: pointer;
}
.isDel{
  text-decoration: line-through;
}
.tips-soldout{
  margin-left:10px;
  color:#DE1515;
}
</style>