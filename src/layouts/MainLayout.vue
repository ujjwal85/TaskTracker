<template>
  <v-app>
    <Sidebar v-if="isLoggedIn" :menu-items="menuItems" />
    <div class="content-area">
      <v-app-bar density="compact">
        <v-app-bar-title>{{ currentTitle }}</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-menu location="bottom end">
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props">
              <v-avatar size="40" color="primary">
                <v-img
                  src="https://lh3.googleusercontent.com/ogw/AF2bZyhGQDTvH1V6CH5t3NDJXsKGZ6jwi3MR-m7sxSY7SmiLxA=s32-c-mo"
                ></v-img>
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
import { useRoute, useRouter } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'

const route = useRoute()
const router = useRouter()

const isLoggedIn = computed(() => !!localStorage.getItem('authToken'))

const handleLogout = () => {
  localStorage.removeItem('authToken')
  router.push('/SignIn')
}

const menuItems = [
  { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/dashboard' },
  { title: 'Files', icon: 'mdi-folder', route: '/dashboard' },
]

const userMenuItems = [
  { title: 'Profile', icon: 'mdi-account' },
  { title: 'Settings', icon: 'mdi-cog' },
  { title: 'Logout', icon: 'mdi-logout', action: handleLogout },
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
