<template>
  <Toast position="top-right" />
  <div v-if="!isLoginPage && !isQuizPage" class="app-container">
    <!-- Sidebar -->
    <aside class="sidebar" :class="{ active: sidebarActive }">
      <div class="sidebar-header">
        <div class="flex align-items-center gap-2 p-3">
          <i class="pi pi-shield" style="font-size: 2rem; color: var(--primary-color)"></i>
          <div>
            <div class="text-xl font-bold" style="color: var(--primary-color)">ImgVoid</div>
            <div class="text-sm" style="color: var(--text-color-secondary)">Academy</div>
          </div>
        </div>
      </div>

      <nav class="sidebar-nav">
        <div class="nav-section">
          <div class="nav-section-title">{{ $t('settings.general') }}</div>
          <router-link to="/" class="nav-item" active-class="active">
            <i class="pi pi-th-large"></i>
            <span>{{ $t('nav.dashboard') }}</span>
          </router-link>
          <router-link to="/courses" class="nav-item" active-class="active">
            <i class="pi pi-book"></i>
            <span>{{ $t('nav.courses') }}</span>
          </router-link>
          <router-link to="/progress" class="nav-item" active-class="active">
            <i class="pi pi-chart-line"></i>
            <span>{{ $t('nav.progress') }}</span>
          </router-link>
        </div>

        <div class="nav-section">
          <div class="nav-section-title">{{ $t('settings.account') }}</div>
          <router-link to="/settings" class="nav-item" active-class="active">
            <i class="pi pi-cog"></i>
            <span>{{ $t('nav.settings') }}</span>
          </router-link>
        </div>
      </nav>

      <div class="sidebar-footer">
        <div class="user-profile">
          <Avatar :image="userStore.user.avatar" shape="circle" size="large" />
          <div class="user-info">
            <div class="user-name">{{ userStore.user.name }}</div>
            <div class="user-email">{{ userStore.user.email }}</div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <div class="mobile-header">
        <Button icon="pi pi-bars" text @click="toggleSidebar" />
        <div class="flex align-items-center gap-2">
          <i class="pi pi-shield" style="font-size: 1.5rem; color: var(--primary-color)"></i>
          <span class="font-bold" style="color: var(--primary-color)">ImgVoid Academy</span>
        </div>
        <Avatar :image="userStore.user.avatar" shape="circle" />
      </div>

      <div class="content-wrapper">
        <router-view />
      </div>
    </main>

    <!-- Mobile Overlay -->
    <div v-if="sidebarActive" class="sidebar-overlay" @click="toggleSidebar"></div>
  </div>

  <div v-else-if="isQuizPage" class="quiz-layout">
    <router-view />
  </div>

  <div v-else>
    <router-view />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from './stores/user'
import { useTheme } from './composables/useTheme'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Toast from 'primevue/toast'

const route = useRoute()
const userStore = useUserStore()
const { initTheme, switchTheme } = useTheme()
const sidebarActive = ref(false)

const isLoginPage = computed(() => route.path === '/login')
const isQuizPage = computed(() => route.path.startsWith('/quiz'))

// Initialize theme on mount
onMounted(() => {
  initTheme(userStore.user.settings.theme)
})

// Watch for theme changes
watch(() => userStore.user.settings.theme, (newTheme) => {
  switchTheme(newTheme)
})

function toggleSidebar() {
  sidebarActive.value = !sidebarActive.value
}
</script>

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
  background: var(--surface-ground);
}

.sidebar {
  width: 250px;
  background: var(--surface-section);
  border-right: 1px solid var(--surface-border);
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 1000;
  transition: transform 0.3s ease;
}

.sidebar-header {
  border-bottom: 1px solid var(--surface-border);
  padding: 0.5rem 0;
}

.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: 1rem 0;
}

.nav-section {
  margin-bottom: 2rem;
}

.nav-section-title {
  padding: 0.5rem 1.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-color-secondary);
  letter-spacing: 0.5px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.875rem 1.5rem;
  color: var(--text-color-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
  font-weight: 500;
  border-left: 3px solid transparent;
}

.nav-item:hover {
  background: var(--surface-overlay);
  color: var(--text-color);
}

.nav-item.active {
  background: rgba(6, 182, 212, 0.1);
  color: var(--primary-color);
  border-left-color: var(--primary-color);
}

.nav-item i {
  font-size: 1.25rem;
  width: 1.25rem;
}

.sidebar-footer {
  border-top: 1px solid var(--surface-border);
  padding: 1rem;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.user-info {
  flex: 1;
  overflow: hidden;
}

.user-name {
  font-weight: 600;
  color: var(--text-color);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.user-email {
  font-size: 0.75rem;
  color: var(--text-color-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.main-content {
  flex: 1;
  margin-left: 250px;
  min-height: 100vh;
}

.mobile-header {
  display: none;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: var(--surface-section);
  border-bottom: 1px solid var(--surface-border);
  position: sticky;
  top: 0;
  z-index: 999;
}

.content-wrapper {
  padding: 2rem;
}

.sidebar-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.quiz-layout {
  min-height: 100vh;
  background: var(--surface-ground);
  padding: 2rem;
}

@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
  }

  .sidebar.active {
    transform: translateX(0);
  }

  .main-content {
    margin-left: 0;
  }

  .mobile-header {
    display: flex;
  }

  .content-wrapper {
    padding: 1rem;
  }

  .sidebar-overlay {
    display: block;
  }

  .quiz-layout {
    padding: 1rem;
  }
}
</style>

