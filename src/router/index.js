import Vue from "vue";
import VueRouter from "vue-router";
import List from "@/pages/List.vue";
import Post from "@/pages/Post.vue";
import Edit from "@/pages/Edit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "List",
    component: List,
  },
  {
    path: "/post",
    name: "Post",
    component: Post,
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: Edit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
