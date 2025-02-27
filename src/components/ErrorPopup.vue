<template>
  <v-dialog v-model="errorStore.state.showMessage" persistent max-width="300">
    <v-card class="popup-card" :class="popup.classes.card">
      <v-card-text class="text-center">
        <v-img class="mx-auto mb-3" max-width="120" src="/src/assets/aayan.png"></v-img>
        <v-avatar size="60" class="popup-icon" :class="popup.classes.icon">
          <v-icon size="36" color="white">{{ popup.icon }}</v-icon>
        </v-avatar>
        <h3 class="popup-title">{{ popup.title }}</h3>
        <p class="popup-message">
          {{ errorStore.state.messageText || popup.defaultMessage }}
        </p>
        <v-btn
          class="popup-btn"
          :class="popup.classes.button"
          block
          @click="errorStore.clearMessage"
        >
          {{ popup.buttonText }}
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { computed } from 'vue'
import { errorStore } from '@/stores/errorStore'

const popup = computed(() => {
  const isError = errorStore.state.messageType === 'error'
  return {
    title: isError ? 'Error' : 'Success',
    icon: isError ? 'mdi-close' : 'mdi-check',
    defaultMessage: isError ? 'Something went wrong!' : 'Operation successful!',
    buttonText: isError ? 'Try Again' : 'OK',
    classes: {
      card: isError ? 'error-card' : 'success-card',
      icon: isError ? 'error-icon' : 'success-icon',
      button: isError ? 'error-btn' : 'success-btn',
    },
  }
})
</script>

<style scoped>
.popup-card {
  border-radius: 16px !important;
  padding: 8px !important;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.error-card {
  border: 2px solid #ff4d4f;
}

.error-icon {
  background-color: #ff4d4f;
  border: 5px solid white;
}

.error-title {
  color: #ff4d4f;
}

.error-btn {
  background-color: #ff4d4f;
  color: white;
  font-weight: bold;
  border-radius: 12px;
}

.error-btn:hover {
  background-color: #e04142;
}

.success-card {
  border: 2px solid #4caf50;
}

.success-icon {
  background-color: #4caf50;
  border: 5px solid white;
}

.success-title {
  color: #4caf50;
}

.success-btn {
  background-color: #4caf50;
  color: white;
  font-weight: bold;
  border-radius: 12px;
}

.success-btn:hover {
  background-color: #3e8e41;
}
</style>
