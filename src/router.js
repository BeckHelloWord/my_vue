import hello from './components/hello';
import addbook from './components/addbook';

const router = {
  routes: [
    {
      path: "/hello",
      component: hello
    },
    {
      path: "/addbook",
      component: addbook
    },
  ]
} //这里可以带有路由器的配置参数


export default router; //将路由器导出