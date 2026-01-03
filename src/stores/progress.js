import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProgressStore = defineStore('progress', () => {
  const activities = ref([
    {
      id: 1,
      icon: 'pi pi-check-circle',
      title: "Completed 'Advanced React Hooks' lesson.",
      time: '2 hours ago'
    },
    {
      id: 2,
      icon: 'pi pi-star',
      title: "Earned 'CSS Grid Master' badge.",
      time: 'Yesterday'
    },
    {
      id: 3,
      icon: 'pi pi-book',
      title: "Started 'TypeScript Fundamentals' course.",
      time: '2 days ago'
    },
    {
      id: 4,
      icon: 'pi pi-code',
      title: "Solved 3 coding challenges on LeetCode.",
      time: '3 days ago'
    },
    {
      id: 5,
      icon: 'pi pi-users',
      title: "Reviewed project 'Portfolio Website' for a peer.",
      time: '4 days ago'
    },
    {
      id: 6,
      icon: 'pi pi-bolt',
      title: "Gained 50 XP from quiz completion.",
      time: '5 days ago'
    }
  ])

  const achievements = ref([
    {
      id: 1,
      icon: 'pi pi-code',
      title: 'First Commit',
      description: 'Made your first contribution.',
      unlocked: true
    },
    {
      id: 2,
      icon: 'pi pi-book',
      title: 'Course Completionist',
      description: 'Completed 5 courses in total.',
      unlocked: true
    },
    {
      id: 3,
      icon: 'pi pi-clock',
      title: 'Daily Learner',
      description: 'Maintained a 30-day learning streak.',
      unlocked: true
    },
    {
      id: 4,
      icon: 'pi pi-lightbulb',
      title: 'Problem Solver',
      description: 'Solved 10 coding challenges.',
      unlocked: true
    },
    {
      id: 5,
      icon: 'pi pi-users',
      title: 'Community Contributor',
      description: 'Helped 5 peers in forums.',
      unlocked: true
    },
    {
      id: 6,
      icon: 'pi pi-server',
      title: 'Backend Architect',
      description: 'Completed Advanced Node.js course.',
      unlocked: true
    },
    {
      id: 7,
      icon: 'pi pi-desktop',
      title: 'Frontend Master',
      description: 'Built a responsive web application.',
      unlocked: true
    },
    {
      id: 8,
      icon: 'pi pi-palette',
      title: 'UI/UX Innovator',
      description: 'Designed an intuitive user interface.',
      unlocked: true
    }
  ])

  const skills = ref([
    'React', 'TypeScript', 'Node.js', 'Docker', 'AWS',
    'Python', 'Data Structures', 'Algorithms', 'Vue.js',
    'Kubernetes', 'Azure', 'Go'
  ])

  const xpHistory = ref([
    { day: 'Mon', xp: 180 },
    { day: 'Tue', xp: 240 },
    { day: 'Wed', xp: 90 },
    { day: 'Thu', xp: 250 },
    { day: 'Fri', xp: 200 },
    { day: 'Sat', xp: 310 },
    { day: 'Sun', xp: 280 }
  ])

  const totalXP = computed(() => {
    return xpHistory.value.reduce((sum, day) => sum + day.xp, 0)
  })

  const unlockedAchievements = computed(() => {
    return achievements.value.filter(a => a.unlocked)
  })

  function addActivity(activity) {
    activities.value.unshift({
      id: Date.now(),
      ...activity,
      time: 'just now'
    })
  }

  function unlockAchievement(achievementId) {
    const achievement = achievements.value.find(a => a.id === achievementId)
    if (achievement) {
      achievement.unlocked = true
      addActivity({
        icon: 'pi pi-trophy',
        title: `Unlocked achievement: ${achievement.title}`
      })
    }
  }

  function addXPToHistory(xp) {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'short' })
    const todayEntry = xpHistory.value.find(entry => entry.day === today)
    if (todayEntry) {
      todayEntry.xp += xp
    }
  }

  return {
    activities,
    achievements,
    skills,
    xpHistory,
    totalXP,
    unlockedAchievements,
    addActivity,
    unlockAchievement,
    addXPToHistory
  }
})

