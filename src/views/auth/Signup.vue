<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card class="signup-card pa-6" elevation="12">
      <v-img class="mx-auto mb-3 logo" src="/src/assets/aayan.png"></v-img>

      <h2 class="text-center font-weight-bold">Register Your Company</h2>
      <p class="text-center text-grey-darken-1 text-subtitle-2">
        Create an account to manage your company
      </p>

      <v-text-field
        v-model="companyName"
        placeholder="Company Name"
        prepend-inner-icon="mdi-domain"
        variant="outlined"
        density="compact"
        class="mt-3"
      ></v-text-field>

      <v-text-field
        v-model="companyDomain"
        placeholder="Company Domain (example.com)"
        prepend-inner-icon="mdi-web"
        variant="outlined"
        density="compact"
      ></v-text-field>

      <v-text-field
        v-model="name"
        placeholder="Full Name"
        prepend-inner-icon="mdi-account-outline"
        variant="outlined"
        density="compact"
      ></v-text-field>

      <v-text-field
        v-model="email"
        placeholder="Email Address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        density="compact"
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

      <v-text-field
        v-model="confirmPassword"
        :type="showConfirmPassword ? 'text' : 'password'"
        placeholder="Confirm Password"
        prepend-inner-icon="mdi-lock-outline"
        :append-inner-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
        variant="outlined"
        density="compact"
        @click:append-inner="showConfirmPassword = !showConfirmPassword"
      ></v-text-field>

      <v-btn class="mt-3 signup-btn" block @click="signup">Register</v-btn>

      <p class="text-center text-grey-darken-1 text-caption mt-3">Or continue with</p>

      <div class="d-flex justify-center mt-2">
        <v-btn icon variant="text" class="social-btn">
          <v-icon color="red">mdi-google</v-icon>
        </v-btn>
        <v-btn icon variant="text" class="social-btn mx-2">
          <v-icon color="blue">mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon variant="text" class="social-btn">
          <v-icon color="black">mdi-apple</v-icon>
        </v-btn>
      </div>

      <v-card-text class="text-center text-caption mt-2">
        Already have an account?
        <a class="text-blue text-decoration-none font-weight-bold" href="#" @click="signIn">
          Sign in now
        </a>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const companyName = ref('')
const companyDomain = ref('')
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const signup = () => {
  const payload = {
    companyName: companyName.value,
    companyDomain: companyDomain.value,
    name: name.value,
    email: email.value,
    password: password.value,
    role: 'super_admin',
  }

  console.log('Signup Payload:', payload)
}

const signIn = () => {
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
.signup-card {
  width: 426px;
  border-radius: 61px;
  text-align: center;
  background: white;
}
.logo {
  max-width: 120px;
}
.signup-btn {
  background: linear-gradient(to right, #436362, #71d871);
  color: white;
  font-weight: bold;
  border-radius: 8px;
}
.social-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.text-caption {
  font-size: 0.85rem;
}
</style>
