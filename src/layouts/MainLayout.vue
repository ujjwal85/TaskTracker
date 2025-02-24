<template>
  <v-app>
    <Sidebar :menu-items="menuItems" />
    <div class="content-area">
      <v-app-bar density="compact">
        <v-app-bar-title>{{ currentTitle }}</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-menu location="bottom end">
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props">
              <v-avatar size="40" color="primary">
                <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
              </v-avatar>
            </v-btn>
          </template>
          <v-list density="compact">
            <template v-for="(item, index) in userMenuItems" :key="index">
              <v-divider v-if="item.divider"></v-divider>
              <v-list-item
                v-else
                :value="item.value"
                :prepend-icon="item.icon"
                @click="item.action ? item.action() : null"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </template>
          </v-list>
        </v-menu>
      </v-app-bar>

      <v-main class="content-area">
        <router-view></router-view>
      </v-main>
    </div>
  </v-app>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'

const route = useRoute()

const handleLogout = () => {
  console.log('Logout clicked')
}

const menuItems = [
  { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/' },
  { title: 'Files', icon: 'mdi-folder', route: '/' },
]

const userMenuItems = [
  { title: 'Profile', icon: 'mdi-account', value: 'profile' },
  { title: 'Settings', icon: 'mdi-cog', value: 'settings' },
  { divider: true },
  { title: 'Logout', icon: 'mdi-logout', value: 'logout', action: handleLogout },
]

const currentTitle = computed(() => {
  const found = menuItems.find((item) => item.route === route.path)
  return found?.title || 'Dashboard'
})
</script>

<style scoped>
.content-area {
  padding-top: 15px;
}
</style>
