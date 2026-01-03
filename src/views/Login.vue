<template>
  <div class="login-page">
    <div class="login-container">
      <Card class="login-card">
        <template #content>
          <div class="login-header">
            <div class="flex align-items-center justify-content-center gap-2 mb-3">
              <i class="pi pi-shield" style="font-size: 3rem; color: var(--primary-color)"></i>
            </div>
            <h1 class="text-4xl font-bold mb-2 text-center">ImgVoid Academy</h1>
            <p class="text-center text-color-secondary text-lg mb-4">
              Welcome back! Please login to continue your learning journey.
            </p>
          </div>

          <form @submit.prevent="handleLogin" class="login-form">
            <div class="form-group mb-4">
              <label for="email" class="form-label">Email Address</label>
              <InputText 
                id="email"
                v-model="email" 
                type="email"
                placeholder="Enter your email"
                class="w-full"
                required
              />
            </div>

            <div class="form-group mb-4">
              <label for="password" class="form-label">Password</label>
              <Password 
                id="password"
                v-model="password" 
                placeholder="Enter your password"
                :feedback="false"
                toggleMask
                class="w-full"
                inputClass="w-full"
                required
              />
            </div>

            <div class="flex align-items-center justify-content-between mb-4">
              <div class="flex align-items-center gap-2">
                <Checkbox v-model="rememberMe" inputId="remember" :binary="true" />
                <label for="remember" class="cursor-pointer">Remember me</label>
              </div>
              <a href="#" class="text-primary">Forgot password?</a>
            </div>

            <Button 
              type="submit"
              label="Login" 
              icon="pi pi-sign-in"
              class="w-full"
              size="large"
              :loading="loading"
            />
          </form>

          <div class="login-footer">
            <p class="text-center text-color-secondary">
              Don't have an account? 
              <a href="#" class="text-primary font-semibold">Sign up</a>
            </p>
          </div>
        </template>
      </Card>

      <div class="login-features">
        <div class="feature-item">
          <i class="pi pi-book"></i>
          <div>
            <div class="font-bold mb-1">Expert-Led Courses</div>
            <div class="text-sm text-color-secondary">Learn from industry professionals</div>
          </div>
        </div>
        <div class="feature-item">
          <i class="pi pi-trophy"></i>
          <div>
            <div class="font-bold mb-1">Earn Certificates</div>
            <div class="text-sm text-color-secondary">Showcase your achievements</div>
          </div>
        </div>
        <div class="feature-item">
          <i class="pi pi-users"></i>
          <div>
            <div class="font-bold mb-1">Join Community</div>
            <div class="text-sm text-color-secondary">Connect with learners worldwide</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'
import Card from 'primevue/card'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Checkbox from 'primevue/checkbox'

const router = useRouter()
const userStore = useUserStore()

const email = ref('elara.vance@example.com')
const password = ref('password123')
const rememberMe = ref(false)
const loading = ref(false)

async function handleLogin() {
  loading.value = true
  
  // Simulate API call
  setTimeout(() => {
    userStore.login({
      name: 'Elara Vance',
      email: email.value
    })
    loading.value = false
    router.push('/')
  }, 1000)
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #0f1419 0%, #1a1f2e 100%);
  position: relative;
  overflow: hidden;
}

.login-page::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%);
  animation: pulse 8s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.login-container {
  max-width: 450px;
  width: 100%;
  z-index: 1;
}

.login-card {
  backdrop-filter: blur(10px);
  background: rgba(30, 37, 51, 0.9);
  border: 1px solid var(--surface-border);
}

.login-header {
  margin-bottom: 2rem;
}

.login-form {
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--text-color);
}

.login-footer {
  padding-top: 1.5rem;
  border-top: 1px solid var(--surface-border);
}

.text-primary {
  color: var(--primary-color);
  text-decoration: none;
  transition: opacity 0.2s;
}

.text-primary:hover {
  opacity: 0.8;
}

.login-features {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(30, 37, 51, 0.5);
  border: 1px solid var(--surface-border);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.feature-item i {
  font-size: 2rem;
  color: var(--primary-color);
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .login-page {
    padding: 1rem;
  }

  .login-header h1 {
    font-size: 2rem;
  }
}
</style>

