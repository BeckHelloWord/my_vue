<template>
  <div id="app">
    <p v-text="title"></p>
    <input type="text" v-model="bookName" @keyup.enter="addBook" />
    <ul class="bookList">
      <li v-for="item in items" v-bind:class="{isDel:item.isDel}" v-on:click="delBook(item)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  import Hello from './components/Hello'

  export default {
    data() {
      return {
        title: '书籍管理',
        items: [
          { name: '活着', isDel: false },
          { name: '鲁兵逊漂流记', isDel: true },
          { name: '小时代', isDel: false }
        ],
        bookName: ''
      }
    },
    methods: {
      delBook: function (item) {
        item.isDel = !item.isDel;
      },
      addBook: function () {
        this.items.push({ name: this.bookName, isDel: false });
        this.bookName = '';
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
.bookList{
  width:210px;
  margin:0 auto;
  font-size:12px;
  color:#999;
  text-align: left;
  list-style: none;
}
.bookList li{
  margin:10px 0;
}
.isDel{
  text-decoration: line-through;
}
</style>