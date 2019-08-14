<template>
<!-- App.vue -->

<v-app>
  <v-app-bar
          app
          color="teal accent-5"
          dark
  >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Page title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-chip-group>
    <v-chip color="white" class="xs1 md2">
      Company
      <v-avatar
              color="grey lighten-5"
              size=32
      >
        <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
      </v-avatar>
    </v-chip>
    <v-chip color="white" class="xs1 md2">
      User
      <v-avatar
              color="grey lighten-5"
              size=32
      >
        <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
      </v-avatar>
    </v-chip>
    </v-chip-group>

    <v-menu
      left
      bottom
    >
    </v-menu>
  </v-app-bar>

  <v-navigation-drawer
      app
      v-model="drawer"
      clipped
      floating
      mini-variant-width="50px"
      width="200px"
      expand-on-hover
    >

      <v-list
              dense
              nav
      >
        <v-list-item
                link
                exact
                v-for="item of itemsNav"
                :to="item.path"
        >
            <v-list-item-icon>
              <v-icon :title="item.title">{{item.ico}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="subtitle-1">
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

      </v-list>
  </v-navigation-drawer>

  <!-- Sizes your content based upon application components -->
  <v-content>

    <!-- Provides the application the proper gutter -->

      <!-- If using vue-router -->
      <router-view></router-view>
  </v-content>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      hover: false,
      itemsNav: [
          {title: "Склад", ico: "mdi-layers-triple-outline", path: '/stock'},
          {title: "Сообщения", ico: "mdi-chat", path: '/message'},
          {title: "Магазин", ico: "mdi-store", path: '/store'},
          {title: "Касса", ico: "mdi-cash-register", path: '/cash'},
          {title: "Заказы", ico: "mdi-file-document-box-multiple", path: '/job'},
          {title: "Отчеты", ico: "mdi-finance", path: '/dashboard'}
      ]
    })
  }
</script>

<style>
 .v-app-bar {
    left: 0 !important;
  }
  .v-content__wrap {
    background-color: #f1f3f9;
  }
</style>