const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "", // Empty path corresponds to the parent route
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/help", // Route for Sample.vue as a child
        component: () => import("src/pages/HelpPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
