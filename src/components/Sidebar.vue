<template>
  <v-navigation-drawer permanent :width="100" class="static-sidebar">
    <div class="sidebar-logo pt-4">
      <v-img src="/src/assets/logo.jpg" contain height="50"></v-img>
    </div>

    <v-list density="compact">
      <v-divider></v-divider>

      <v-list-item
        v-for="item in menuItems"
        :key="item.route"
        :value="item.route"
        :to="item.route"
        color="primary"
      >
        <div class="sidebar-item">
          <v-icon size="32" class="sidebar-icon">{{ item.icon }}</v-icon>
          <span class="sidebar-text">{{ item.title }}</span>
        </div>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
defineProps({
  menuItems: {
    type: Array as () => Array<{ title: string; icon: string; route: string }>,
    default: () => [],
  },
})
</script>

<style scoped>
.static-sidebar {
  position: fixed;
  height: 100vh;
  z-index: 1000;
  transition: none !important;
  background:
    linear-gradient(rgba(44, 65, 111, 0.8), rgba(44, 65, 111, 0.8)),
    url('C:\ujjwal\veu apdmin panel\admin\src\assets\sidebarBackgraound.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
}

.v-list-item {
  color: white !important;
  display: flex;
  justify-content: center;
}

.v-list-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
}

.v-divider {
  border-color: rgba(255, 255, 255, 0.4);
}

.sidebar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
}

.sidebar-icon {
  font-size: 32px;
}

.sidebar-text {
  margin-top: 5px;
  font-size: 12px;
}
</style>
