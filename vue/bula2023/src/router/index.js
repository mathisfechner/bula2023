import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import team from "../views/Team.vue";
import faqs from "../views/FAQs.vue";
import faq from "../views/FAQ.vue";
import map from "../views/Map.vue";
import Penpals from "../views/Penpals.vue";
const routes = [
  {
    path: "/:pathMatch*",
    name: "Home",
    component: Home,
  },
  {
    path: "/team",
    name: "team",
    component: team,
  },
  {
    path: "/faq",
    name: "faqs",
    component: faqs,
  },
  {
    path: "/faq/:tag",
    name: "faq",
    component: faq,
    props: true,
  },
  {
    path: "/lagerplatz",
    name: "lagerplatz",
    component: map,
  },
  {
    path: "/brieffreundschaften",
    name: "brieffreundschaften",
    component: Penpals,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash != "")
      return {
        el: to.hash,
        top: 130,
        left: 0,
        behavior: to.path == from.path ? "smooth" : "auto",
      };
    return { top: 0 };
  },
});

router.afterEach((to, from) => {
  from.query.savedPosition = true;
});

export default router;
