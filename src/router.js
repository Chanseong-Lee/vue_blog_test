import { createWebHistory, createRouter } from "vue-router";
import ListComponent from './components/ListComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import DetailComponent from './components/DetailComponent.vue'

const routes = [//위에있는 path가 우선순위
  {
    name: "detail",
    path: "/detail/:id(\\d+)",  /* url 경로 :아무문자(정규식) */
    component: DetailComponent, /* import해온 컴포넌트 */
    // props: {blogData: Object}
  },
  {
    path: "/list",  /* url 경로 */
    component: ListComponent, /* import해온 컴포넌트 */
  },
  {
    path: "/",  /* url 경로 */
    component: HomeComponent, /* import해온 컴포넌트 */
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 