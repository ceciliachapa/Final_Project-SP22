import { createRouter, createWebHistory } from "vue-router";
import useAuth from "./composable/useAuth";
import Index from "./pages/index.vue";
import About from "./pages/about.vue";
import Faq from "./pages/faq.vue";
import Contact from "./pages/contact.vue";
import MyFruitStand from "./pages/myFruitStand.vue";
import FruitToday from "./pages/fruitToday.vue";
import Trending from "./pages/trending.vue";
import Login from "./pages/login.vue";
import NotFound from "./pages/404.vue";

const { isAuthenticated } = useAuth();

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/faq",
    name: "faq",
    component: Faq,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/myFruitStand",
    name: "myFruitStand",
    component: MyFruitStand,
    beforeEnter: (to, from, next) => {
      console.log(isAuthenticated);
      if (!isAuthenticated.value) {
        next("/login");
      }
      next();
    },
  },
  {
    path: "/fruitToday",
    name: "fruitToday",
    component: FruitToday,
    beforeEnter: (to, from, next) => {
      console.log(isAuthenticated);
      if (!isAuthenticated.value) {
        next("/login");
      }
      next();
    },
  },
  {
    path: "/trending",
    name: "trending",
    component: Trending,
    beforeEnter: (to, from, next) => {
      console.log(isAuthenticated);
      if (!isAuthenticated.value) {
        next("/login");
      }
      next();
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
