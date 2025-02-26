<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card class="login-card pa-6" elevation="10">
      <v-img class="mx-auto mb-3" max-width="120" src="/src/assets/aayan.png"></v-img>

      <h3 class="text-center font-weight-bold">Sign in with email</h3>

      <v-text-field
        v-model="email"
        placeholder="Email"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        density="compact"
        class="mt-3"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :type="showPassword ? 'text' : 'password'"
        placeholder="Password"
        prepend-inner-icon="mdi-lock-outline"
        :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
        variant="outlined"
        density="compact"
        @click:append-inner="showPassword = !showPassword"
      ></v-text-field>

      <div
        class="d-flex justify-space-between text-caption forgot-password"
        @click="forgotPassword"
        role="button"
        style="cursor: pointer"
      >
        <span></span>
        <a class="font-weight-bold text-blue">Forgot password?</a>
      </div>

      <v-btn class="mt-3 login-btn" block @click="login" :loading="loading" :disabled="loading">
        <template v-if="loading">
          <v-progress-circular indeterminate size="20" color="white"></v-progress-circular>
        </template>
        <template v-else> Sign In </template>
      </v-btn>

      <p class="text-center text-grey-darken-1 text-caption mt-2">Or sign in with</p>

      <div class="d-flex justify-center mt-2">
        <v-btn icon variant="outlined" class="social-btn">
          <v-icon color="red">mdi-google</v-icon>
        </v-btn>
        <v-btn icon variant="outlined" class="social-btn mx-2">
          <v-icon color="blue">mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon variant="outlined" class="social-btn">
          <v-icon color="black">mdi-apple</v-icon>
        </v-btn>
      </div>

      <v-card-text class="text-center text-caption mt-2">
        Don't have an account?
        <a
          class="text-blue text-decoration-none font-weight-bold"
          @click="signUp"
          role="button"
          style="cursor: pointer"
        >
          Sign up now
        </a>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { errorStore } from '@/stores/errorStore'

const router = useRouter()
const email = ref<string>('')
const password = ref<string>('')
const showPassword = ref<boolean>(false)
const loading = ref<boolean>(false)

const login = async () => {
  if (!email.value || !password.value) {
    errorStore.setError('Email and Password are required!')
    return
  }

  loading.value = true

  setTimeout(() => {
    if (email.value !== 'test@example.com' || password.value !== 'password') {
      errorStore.setError('Invalid email or password!')
      loading.value = false
      return
    }

    console.log('Login successful')
    router.push('/dashboard')
  }, 2000)
}

const signUp = () => {
  router.push('/SignUp')
}

const forgotPassword = () => {
  router.push('/ForgotPassword')
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
.login-card {
  width: 400px;
  border-radius: 41px;
  text-align: center;
}
.login-btn {
  background: linear-gradient(to right, #436362, #71d871);
  color: white;
  font-weight: bold;
  border-radius: 6px;
}
.social-btn {
  border-radius: 50%;
  border: 1px solid #ddd;
  width: 36px;
  height: 36px;
}
.text-caption {
  font-size: 0.8rem;
}
.forgot-password {
  margin-top: -12px;
}
</style>
