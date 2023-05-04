import { createWebHistory, createRouter } from "vue-router";
import ListComponent from './components/ListComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import DetailComponent from './components/DetailComponent.vue'
import AuthorComponent from './components/AuthorComponent.vue'
import CommentComponent from './components/CommentComponent.vue'

const routes = [//위에있는 path가 우선순위
  {
    name: "detail",
    path: "/detail/:id(\\d+)",  /* url 경로 :아무문자(정규식) */
    component: DetailComponent, /* import해온 컴포넌트 */
    children: [ /* 자식 route : 부모path에 자식 path가 추가되면 보여짐 */
      {
        name: "author",
        path: "author", //상대경로로 작성해야함
        component: AuthorComponent,
      },
      {
        name: "comment",
        path: "comment",
        component: CommentComponent,
      },
    ]
    // props: {blogData: Object}
  },
  {
    name: "list",
    path: "/list",  /* url 경로 */
    component: ListComponent, /* import해온 컴포넌트 */
  },
  {
    name: "root",
    path: "/",  /* url 경로 */
    component: HomeComponent, /* import해온 컴포넌트 */
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 