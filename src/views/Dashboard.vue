<template>
  <v-container>
    <!-- Top Stats Cards -->
    <v-row>
      <v-col cols="12" sm="3">
        <v-card class="pa-4" outlined>
          <v-card-title>Total Users</v-card-title>
          <v-card-subtitle>150</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3">
        <v-card class="pa-4" outlined>
          <v-card-title>Total Tasks</v-card-title>
          <v-card-subtitle>320</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3">
        <v-card class="pa-4" outlined>
          <v-card-title>Active Tasks</v-card-title>
          <v-card-subtitle>120</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3">
        <v-card class="pa-4" outlined>
          <v-card-title>Completed Tasks</v-card-title>
          <v-card-subtitle>200</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <!-- Task Chart -->
    <v-row>
      <v-col cols="12" sm="8">
        <v-card class="pa-4" outlined>
          <v-card-title>Task Progress</v-card-title>
          <v-card-text>
            <v-progress-linear v-model="taskProgress" color="blue" height="25">
              <strong>{{ taskProgress }}% Completed</strong>
            </v-progress-linear>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Task Table -->
    <v-row>
      <v-col cols="12">
        <v-card class="pa-4" outlined>
          <v-card-title>Task List</v-card-title>
          <v-data-table :headers="taskHeaders" :items="tasks" class="elevation-1"></v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      taskProgress: 62,
      taskHeaders: [
        { text: 'Task Name', value: 'name' },
        { text: 'Assigned To', value: 'assignedTo' },
        { text: 'Status', value: 'status' },
        { text: 'Due Date', value: 'dueDate' },
      ],
      tasks: [
        {
          name: 'Dashboard UI Design',
          assignedTo: 'Admin 1',
          status: 'In Progress',
          dueDate: '2025-03-10',
        },
        {
          name: 'API Development',
          assignedTo: 'Admin 2',
          status: 'Completed',
          dueDate: '2025-02-20',
        },
        { name: 'Bug Fixing', assignedTo: 'User 3', status: 'Pending', dueDate: '2025-03-05' },
      ],
    }
  },
}
</script>

<style>
.v-card {
  border-radius: 10px;
}
</style>
