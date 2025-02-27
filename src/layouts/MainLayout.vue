<template>
  <v-app>
    <Sidebar v-if="isLoggedIn" :menu-items="menuItems" />
    <div class="main-layout">
      <v-app-bar app dense>
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

      <v-main class="content-container">
        <router-view />
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

  { title: 'Projects', icon: 'mdi-folder-multiple', route: '/projects' },
  { title: 'Tasks', icon: 'mdi-check-circle', route: '/tasks' },

  { title: 'Users', icon: 'mdi-account-group', route: '/users' },
  { title: 'Admins', icon: 'mdi-shield-account', route: '/admins' },

  { title: 'Reports', icon: 'mdi-file-chart', route: '/reports' },
  { title: 'Time Tracking', icon: 'mdi-timer-sand', route: '/reports/time-tracking' },

  { title: 'System Logs', icon: 'mdi-file-document', route: '/settings/logs' },
]

const userMenuItems = [
  { title: 'Profile', icon: 'mdi-account' },
  { title: 'Settings', icon: 'mdi-cog' },
  { title: 'Permissions', icon: 'mdi-lock' },
  { title: 'Logout', icon: 'mdi-logout', action: handleLogout },
]

const currentTitle = computed(() => {
  const found = menuItems.find((item) => item.route === route.path)
  return found?.title || 'Dashboard'
})
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-left: 100px;
}

.v-app-bar {
  width: calc(100% - 100px);
  position: fixed;
  top: 0;
  left: 100px;
  z-index: 1001;
}

.content-container {
  flex-grow: 1;
  margin-top: 56px;
  padding: 20px;
  width: calc(100% - 100px);
  overflow-y: auto;
}
</style>
