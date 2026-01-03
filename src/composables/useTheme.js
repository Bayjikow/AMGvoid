import { watch } from 'vue'

export function useTheme() {
  const themes = {
    light: 'lara-light-cyan',
    dark: 'lara-dark-cyan'
  }

  // Get the theme link element or create it if it doesn't exist
  function getThemeLinkElement() {
    let themeLink = document.getElementById('theme-link')
    
    if (!themeLink) {
      themeLink = document.createElement('link')
      themeLink.id = 'theme-link'
      themeLink.rel = 'stylesheet'
      document.head.appendChild(themeLink)
    }
    
    return themeLink
  }

  // Switch theme
  function switchTheme(isDark) {
    const themeLink = getThemeLinkElement()
    const themeName = isDark ? themes.dark : themes.light
    themeLink.href = `https://unpkg.com/primevue@^3/resources/themes/${themeName}/theme.css`
    
    // Save theme preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  // Load theme from localStorage
  function loadTheme() {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme === 'light' ? false : true // default to dark
  }

  // Initialize theme
  function initTheme(isDark) {
    switchTheme(isDark)
  }

  // Watch for theme changes
  function watchTheme(themeRef) {
    watch(themeRef, (newValue) => {
      switchTheme(newValue)
    })
  }

  return {
    switchTheme,
    loadTheme,
    initTheme,
    watchTheme
  }
}

