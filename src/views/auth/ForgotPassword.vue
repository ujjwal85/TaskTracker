<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card class="forgot-card pa-6" elevation="10">
      <v-img class="mx-auto mb-3" max-width="120" src="/src/assets/aayan.png"></v-img>

      <div v-if="step === 'email'">
        <div class="icon-container">
          <v-icon size="40" color="#436362">mdi-key</v-icon>
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
          type="email"
        ></v-text-field>

        <v-btn
          class="reset-btn mt-3"
          block
          @click="sendOtp"
          :disabled="computedValues.isEmailDisabled"
          >Send OTP</v-btn
        >
        <v-btn variant="text" class="back-to-login mt-2" @click="goBack">
          <v-icon left>mdi-arrow-left</v-icon> Back to log in
        </v-btn>
      </div>

      <div v-else-if="step === 'otp'">
        <v-icon size="40" color="436362">mdi-shield-lock-outline</v-icon>
        <h2 class="text-center font-weight-bold">Verify OTP</h2>
        <p class="text-center text-grey-darken-1">Enter the OTP sent to {{ email }}</p>

        <div class="otp-container">
          <input
            v-for="(digit, index) in otpDigits"
            :key="index"
            v-model="otpDigits[index]"
            ref="otpRefs"
            class="otp-box"
            maxlength="1"
            type="text"
            @input="handleOtpInput(index)"
          />
        </div>

        <v-btn
          color="success"
          block
          class="reset-btn mt-3"
          @click="verifyOtp"
          :loading="loading"
          :disabled="computedValues.otpValue.length !== 4"
        >
          VERIFY OTP
        </v-btn>

        <v-btn
          variant="text"
          class="mt-2"
          color="blue"
          @click="resendOtp"
          :disabled="resendDisabled"
        >
          Resend OTP <span v-if="resendDisabled"> ({{ timer }}s)</span>
        </v-btn>
      </div>

      <div v-else-if="step === 'reset'">
        <v-icon size="40" color="#436362">mdi-lock-reset</v-icon>
        <h2 class="text-center font-weight-bold">Set New Password</h2>
        <p class="text-center text-grey-darken-1">Enter your new password below.</p>

        <v-text-field
          v-model="password"
          label="New Password"
          type="password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          density="compact"
          class="mt-3"
        ></v-text-field>
        <v-text-field
          v-model="confirmPassword"
          label="Confirm Password"
          type="password"
          prepend-inner-icon="mdi-lock-check-outline"
          variant="outlined"
          density="compact"
          class="mt-3"
        ></v-text-field>

        <v-btn
          color="primary"
          block
          class="reset-btn mt-3"
          @click="resetPassword"
          :disabled="computedValues.isResetDisabled"
        >
          RESET PASSWORD
        </v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { errorStore } from '@/stores/errorStore'

const router = useRouter()
const step = ref<'email' | 'otp' | 'reset'>('email')
const email = ref<string>('')
const otpDigits = ref<string[]>(['', '', '', ''])
const otpRefs = ref<(HTMLInputElement | null)[]>([])
const loading = ref<boolean>(false)
const resendDisabled = ref<boolean>(false)
const timer = ref<number>(30)
const password = ref<string>('')
const confirmPassword = ref<string>('')

const computedValues = computed(() => ({
  otpValue: otpDigits.value.join(''),
  isResetDisabled: !password.value || !confirmPassword.value,
  isEmailDisabled: !email.value,
}))
const handleOtpInput = (index: number) => {
  otpDigits.value[index] = otpDigits.value[index].replace(/\D/g, '')
  if (otpDigits.value[index].length > 1) {
    otpDigits.value[index] = otpDigits.value[index].slice(0, 1)
  }
  if (otpDigits.value[index] !== '' && index < otpDigits.value.length - 1) {
    nextTick(() => otpRefs.value[index + 1]?.focus())
  }
}

const sendOtp = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email.value) {
    errorStore.setError('Please enter your email')
    return
  }
  if (!emailPattern.test(email.value)) {
    errorStore.setError('Please enter a valid email address')
    return
  }
  step.value = 'otp'
}

const verifyOtp = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    errorStore.setSuccess('OTP Verified Successfully! Redirecting to password reset...')
    step.value = 'reset'
  }, 2000)
}

const resendOtp = () => {
  resendDisabled.value = true
  timer.value = 30
  const interval = setInterval(() => {
    timer.value--
    if (timer.value === 0) {
      clearInterval(interval)
      resendDisabled.value = false
    }
  }, 1000)
}

const resetPassword = () => {
  if (password.value !== confirmPassword.value) {
    errorStore.setError('Passwords do not match!')
    return
  }
  errorStore.setSuccess('Password reset successfully!')
  router.push('/SignIn')
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.forgot-card {
  width: 400px;
  border-radius: 20px;
  text-align: center;
}

.reset-btn {
  background: linear-gradient(to right, #436362, #71d871);
  color: white;
  font-weight: bold;
  border-radius: 6px;
}

.otp-container {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 10px;
}

.otp-box {
  width: 50px;
  height: 50px;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  border: 2px solid #436362;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s;
}

.otp-box:focus {
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.6);
}
</style>
