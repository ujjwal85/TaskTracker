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
      >
        <span></span>
        <a href="#" class="text-blue">Forgot password?</a>
      </div>

      <v-btn class="mt-3 login-btn" block @click="login">Sign In</v-btn>

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
        <a class="text-blue text-decoration-none font-weight-bold" href="#" @click="signUp">
          Sign up now
        </a>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const showPassword = ref(false)

const login = () => {
  console.log('Login clicked')
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
