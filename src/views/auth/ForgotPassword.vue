<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card class="forgot-card pa-6" elevation="10">
      <div class="icon-container">
        <v-icon size="40" color="purple">mdi-key</v-icon>
      </div>

      <h2 class="text-center font-weight-bold">Forgot password?</h2>
      <p class="text-center text-grey-darken-1">No worries, we'll send you reset instructions.</p>

      <v-text-field
        v-model="email"
        label="Email"
        placeholder="Enter your email"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        density="compact"
        class="mt-3"
      ></v-text-field>

      <v-btn class="reset-btn mt-3" block @click="resetPassword">Reset password</v-btn>

      <v-btn variant="text" class="back-to-login mt-2" @click="goBack">
        <v-icon left>mdi-arrow-left</v-icon> Back to log in
      </v-btn>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')

const resetPassword = () => {
  console.log('Reset password clicked')
}

const goBack = () => {
  router.push('/SignIn')
}
</script>

<style scoped>
.v-container {
  background: linear-gradient(to right, #436362, #71d871);
  min-height: 100vh;
  width: 100vw;
  max-width: 100vw;
  padding: 0 !important;
  margin: 0 !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

.forgot-card {
  width: 400px;
  border-radius: 20px;
  text-align: center;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.reset-btn {
  background: #6a1b9a;
  color: white;
  font-weight: bold;
  border-radius: 6px;
}

.back-to-login {
  color: #827c86;
  font-weight: bold;
}
</style>
