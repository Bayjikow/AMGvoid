import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  // Load saved name and theme from localStorage
  const savedName = localStorage.getItem('userName')
  const savedTheme = localStorage.getItem('theme')
  
  const user = ref({
    name: savedName || 'Elara Vance',
    email: 'elara.vance@example.com',
    avatar: 'https://i.pravatar.cc/120?img=12',
    xp: 2450,
    level: 7,
    streak: 125,
    settings: {
      language: 'English',
      theme: savedTheme === 'light' ? false : true, // true = dark, false = light
      securityTips: true
    }
  })

  const isAuthenticated = ref(true)

  const xpToNextLevel = computed(() => {
    const nextLevelXP = 3000
    return nextLevelXP - user.value.xp
  })

  const levelProgress = computed(() => {
    const baseXP = 0
    const nextLevelXP = 3000
    const currentXP = user.value.xp
    return Math.round(((currentXP - baseXP) / (nextLevelXP - baseXP)) * 100)
  })

  function addXP(amount) {
    user.value.xp += amount
    checkLevelUp()
  }

  function checkLevelUp() {
    const nextLevelXP = user.value.level * 1500
    if (user.value.xp >= nextLevelXP) {
      user.value.level++
    }
  }

  function updateStreak() {
    user.value.streak++
  }

  function updateSettings(newSettings) {
    user.value.settings = { ...user.value.settings, ...newSettings }
    
    // Save theme to localStorage if it's being updated
    if (newSettings.theme !== undefined) {
      localStorage.setItem('theme', newSettings.theme ? 'dark' : 'light')
    }
  }

  function updateProfile(data) {
    user.value = { ...user.value, ...data }
    // Save name to localStorage if it's being updated
    if (data.name) {
      localStorage.setItem('userName', data.name)
    }
  }

  function login(credentials) {
    isAuthenticated.value = true
    user.value.name = credentials.name || 'Elara Vance'
    user.value.email = credentials.email || 'elara.vance@example.com'
  }

  function logout() {
    isAuthenticated.value = false
    user.value = {
      name: '',
      email: '',
      avatar: '',
      xp: 0,
      level: 1,
      streak: 0,
      settings: {
        language: 'English',
        theme: true,
        securityTips: true
      }
    }
  }

  return {
    user,
    isAuthenticated,
    xpToNextLevel,
    levelProgress,
    addXP,
    updateStreak,
    updateSettings,
    updateProfile,
    login,
    logout
  }
})

