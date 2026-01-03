<template>
  <div class="settings-page fade-in">
    <div class="settings-container-single">
      <!-- Header -->
      <div class="settings-header-main">
        <i class="pi pi-cog" style="font-size: 2rem; color: var(--primary-color)"></i>
        <h1 class="text-4xl font-bold">{{ $t('settings.title') }}</h1>
      </div>

      <!-- Main Content -->
      <main class="settings-content-single">
        <!-- Profile Section -->
        <div>
          <h1 class="text-3xl font-bold mb-4">{{ $t('settings.profile') }}</h1>
          
          <Card class="mb-4">
            <template #content>
              <div class="form-group mb-4">
                <label class="form-label">{{ $t('settings.userName') }}</label>
                <InputText 
                  v-model="profileName" 
                  class="w-full"
                  :placeholder="$t('settings.userNamePlaceholder')"
                  @blur="updateUserName"
                />
              </div>

              <div class="flex align-items-center gap-4 mb-4">
                <Avatar :image="userStore.user.avatar" shape="circle" size="xlarge" />
                <div>
                  <div class="font-bold text-lg mb-2">{{ userStore.user.name }}</div>
                  <div class="flex gap-2">
                    <Button :label="$t('settings.editAvatar')" size="small" outlined class="p-button-sm" style="color: var(--primary-color); border-color: var(--primary-color);" />
                  </div>
                  <div class="mt-2">
                    <Button :label="$t('settings.saveProfile')" size="small" outlined class="p-button-sm" style="color: var(--primary-color); border-color: var(--primary-color);" @click="saveProfile" />
                  </div>
                </div>
              </div>
            </template>
          </Card>

          <!-- Language -->
          <Card class="mb-4">
            <template #title>{{ $t('settings.language') }}</template>
            <template #content>
              <div class="form-group">
                <label class="form-label">{{ $t('settings.appLanguage') }}</label>
                <Dropdown 
                  v-model="currentLanguage" 
                  :options="languageOptions"
                  optionLabel="label"
                  optionValue="value"
                  :placeholder="$t('settings.selectLanguage')"
                  class="w-full md:w-14rem"
                  @change="changeLanguage"
                />
              </div>
            </template>
          </Card>

          <!-- Theme -->
          <Card class="mb-4">
            <template #title>{{ $t('settings.theme') }}</template>
            <template #content>
              <div class="flex align-items-center justify-content-between">
                <div class="flex-1">
                  <div class="font-semibold mb-1">{{ $t('settings.appTheme') }}</div>
                  <div class="text-sm text-color-secondary">{{ $t('settings.themeDescription') }}</div>
                </div>
                <div class="flex align-items-center gap-3">
                  <div class="flex align-items-center gap-2">
                    <i class="pi pi-sun" :style="{ color: !userStore.user.settings.theme ? 'var(--primary-color)' : 'var(--text-color-secondary)' }"></i>
                    <InputSwitch v-model="userStore.user.settings.theme" @change="handleThemeChange" />
                    <i class="pi pi-moon" :style="{ color: userStore.user.settings.theme ? 'var(--primary-color)' : 'var(--text-color-secondary)' }"></i>
                  </div>
                </div>
              </div>
            </template>
          </Card>

          <!-- Logout Button -->
          <Button 
            :label="$t('settings.logout')" 
            icon="pi pi-sign-out"
            severity="danger"
            class="w-full mt-4"
            @click="logout"
          />
        </div>

      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '../stores/user'
import { useToast } from 'primevue/usetoast'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import InputSwitch from 'primevue/inputswitch'

const router = useRouter()
const userStore = useUserStore()
const { locale, t } = useI18n()
const toast = useToast()

const profileName = ref(userStore.user.name)

// Watch for changes in store to update local ref
watch(() => userStore.user.name, (newName) => {
  profileName.value = newName
})

const currentLanguage = ref(locale.value)

const languageOptions = ref([
  { label: 'English', value: 'en' },
  { label: 'Türkmençe', value: 'tk' }
])

function updateUserName() {
  if (profileName.value && profileName.value.trim() !== '') {
    userStore.updateProfile({ name: profileName.value.trim() })
  }
}

function saveProfile() {
  updateUserName()
  toast.add({
    severity: 'success',
    summary: t('settings.profileUpdated'),
    detail: t('settings.profileUpdatedMessage'),
    life: 3000
  })
}

function changeLanguage() {
  locale.value = currentLanguage.value
  localStorage.setItem('language', currentLanguage.value)
  userStore.user.settings.language = currentLanguage.value
}

function handleThemeChange() {
  userStore.updateSettings({ theme: userStore.user.settings.theme })
}

function logout() {
  localStorage.removeItem('userName')
  userStore.logout()
  router.push('/login')
}
</script>

<style scoped>
.settings-page {
  max-width: 1000px;
  margin: 0 auto;
}

.settings-container-single {
  min-height: 80vh;
}

.settings-header-main {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid var(--surface-border);
}

.settings-content-single {
  width: 100%;
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

@media (max-width: 968px) {
  .settings-container {
    flex-direction: column;
  }

  .settings-sidebar {
    width: 100%;
  }

  .settings-nav {
    display: flex;
    overflow-x: auto;
    padding: 0.5rem;
  }

  .nav-section-title {
    display: none;
  }

  .settings-nav-item {
    flex-shrink: 0;
  }
}
</style>

