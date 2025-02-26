<template>
  <v-dialog v-model="errorStore.state.showError" persistent max-width="300">
    <v-card class="error-card">
      <v-card-text class="text-center">
        <v-avatar size="60" class="error-icon">
          <v-icon size="36" color="white">mdi-close</v-icon>
        </v-avatar>
        <h3 class="error-title">Error</h3>
        <p class="error-message">
          {{ errorStore.state.errorMessage || 'Something went wrong!' }}
        </p>
        <v-btn class="error-btn" block @click="errorStore.clearError">Try again</v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { errorStore } from '@/stores/errorStore'
</script>

<style scoped>
.error-card {
  border-radius: 24px !important;
  padding: 16px !important;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.error-icon {
  background-color: #ff4d4f;
  margin: 0 auto;
  border: 5px solid white;
}

.error-title {
  color: #ff4d4f;
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
}

.error-message {
  color: #666;
  font-size: 13px;
  margin: 8px 0;
}

.error-btn {
  background-color: #ff4d4f;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 12px; /* Button bhi rounded */
  padding: 6px;
  font-size: 14px;
}

.error-btn:hover {
  background-color: #e04142;
}
</style>
