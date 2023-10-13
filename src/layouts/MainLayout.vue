<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { date } from "quasar";

const timeStamp = Date.now();
const todaysDate = date.formatDate(timeStamp, "ddd MMM YYYY");

const linksList = [
  {
    title: "Help",
    caption: "help page",
    icon: "help",
    link: "/sample",
  },
];
const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">Todo</div>
        <div class="text-subtitle1">{{ todaysDate }}</div>
      </div>
      <q-img
        src="~assets/nature.jpeg"
        class="header-image absolute-top"
      ></q-img>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="600"
      class="sidenav"
    >
      <q-scroll-area
        style="
          height: calc(100% - 192px);
          margin-top: 192px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item clickable v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section> Todo </q-item-section>
          </q-item>

          <q-item active clickable v-ripple to="/help">
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>

            <q-item-section> Help </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 192px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Onwukwe g</div>
          <div>@jefperf</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>
<style>
.header-image {
  height: 100%;
  z-index: -1;
  filter: grayscale(70%);
}
.sidenav {
  background-color: #ddd;
}
</style>
