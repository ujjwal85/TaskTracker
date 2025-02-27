<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h2>Thursday, February 27</h2>
          <h1>Good afternoon, Ujjwal</h1>
          <v-btn variant="outlined">My Week</v-btn>
          <span>✔ 0 tasks completed | 👥 0 collaborators</span>
        </v-col>
      </v-row>

      <!-- Super Admin Features -->
      <v-row v-if="role === 'superadmin'">
        <v-col cols="12">
          <v-card class="pa-4 mb-4">
            <v-card-title>Company Overview</v-card-title>
            <v-card-text>
              <p>Total Users: 150</p>
              <p>Total Projects: 45</p>
              <p>Subscription: Active (30 days left)</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="pa-4">
            <v-card-title>Manage Users</v-card-title>
            <v-btn variant="outlined">Add User</v-btn>
            <v-btn variant="outlined">Manage Roles</v-btn>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="pa-4">
            <v-card-title>Subscription & Billing</v-card-title>
            <v-btn variant="outlined">View Plans</v-btn>
          </v-card>
        </v-col>
      </v-row>

      <!-- Admin & User Dashboard -->
      <v-row>
        <v-col cols="6">
          <v-card class="pa-4">
            <v-card-title>My Tasks</v-card-title>
            <v-tabs>
              <v-tab>Upcoming</v-tab>
              <v-tab>Overdue</v-tab>
              <v-tab>Completed</v-tab>
            </v-tabs>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="pa-4">
            <v-card-title>Projects</v-card-title>
            <v-btn v-if="role !== 'user'" variant="outlined">Create Project</v-btn>
          </v-card>
        </v-col>
      </v-row>

      <!-- Reports Section (Super Admin & Admin) -->
      <v-row v-if="role !== 'user'">
        <v-col cols="12">
          <v-card class="pa-4">
            <v-card-title>Reports & Analytics</v-card-title>
            <v-btn variant="outlined">View Reports</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      role: localStorage.getItem('userRole') || 'admin',
    }
  },
}
</script>
