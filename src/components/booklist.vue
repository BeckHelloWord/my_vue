<template>
  <div class="booklist">
    <h2>{{bookListName}}</h2>
    <ul class="soldOut">
      <li v-for="item in soldOutBook" v-if="item.isDel">
        {{item.name}}<span class="tips-soldout">售罄</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'booklist',
    props: ['soldOutBook'],
    data() {
      return {
        bookListName: '已售罄书籍'
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