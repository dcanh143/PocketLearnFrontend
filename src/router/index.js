import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import { useMainStore } from "@/stores/main";

const routes = [
  {
    meta: {
      title: "Home",
    },
    path: "/",
    name: "home",
    component: Home,
  },
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: "Dashboard",
    },
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/ProfileView.vue"),
  },
  {
    meta: {
      title: "Profile",
    },
    path: "/profile",
    name: "profile",
    component: () => import("@/views/ProfileView.vue"),
  },
  {
    meta: {
      title: "Login",
    },
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    meta: {
      title: "Register",
    },
    path: "/register",
    name: "register",
    component: () => import("@/views/RegisterView.vue"),
  },
  {
    meta: {
      title: "Course",
    },
    path: "/course",
    name: "course",
    component: () => import("@/views/CourseView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem("jwt_token")) {
    if (to.path == "/login" || to.path == "/register") {
      next();
    } else {
      next("/login");
    }
  } else {
    if (to.path == "/login" || to.path == "/register") {
      next("/");
    }
    next();
  }
});

export default router;
