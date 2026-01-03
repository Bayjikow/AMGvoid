<template>
  <div class="progress-page fade-in">
    <header class="page-header mb-5">
      <h1 class="text-4xl font-bold">{{ t('progress.title') }}</h1>
    </header>

    <!-- Overall Progress -->
    <div class="grid">
      <div class="col-12 md:col-8">
        <Card>
          <template #title>{{ t('progress.overallProgress') }}</template>
          <template #content>
            <div class="mb-4">
              <div class="flex align-items-center justify-content-between mb-3">
                <div>
                  <div class="text-5xl font-bold" style="color: var(--primary-color)">
                    {{ userStore.user.xp }} XP
                  </div>
                  <div class="text-color-secondary mt-1">
                    {{ t('progress.level') }} {{ userStore.user.level }} - {{ t('progress.noviceCoder') }}
                  </div>
                </div>
              </div>
              <ProgressBar :value="userStore.levelProgress" :showValue="false" class="mb-2" />
              <div class="text-color-secondary text-sm">
                {{ userStore.xpToNextLevel }} XP {{ t('progress.toReachLevel') }} {{ userStore.user.level + 1 }}
              </div>
            </div>
          </template>
        </Card>
      </div>

      <div class="col-12 md:col-4">
        <Card>
          <template #title>{{ t('progress.learningStreak') }}</template>
          <template #content>
            <div class="text-center">
              <i class="pi pi-bolt text-6xl mb-3" style="color: var(--primary-color)"></i>
              <div class="text-5xl font-bold mb-2" style="color: var(--primary-color)">{{ userStore.user.streak }}</div>
              <div class="text-color-secondary">{{ t('progress.consecutiveDays') }}</div>
            </div>
          </template>
        </Card>
      </div>
    </div>

    <!-- Achievements -->
    <section class="mt-5">
      <h2 class="text-2xl font-bold mb-4">{{ t('progress.yourAchievements') }}</h2>
      <div class="grid">
        <div 
          v-for="achievement in progressStore.achievements" 
          :key="achievement.id"
          class="col-12 sm:col-6 md:col-4 lg:col-3"
        >
          <div 
            class="achievement-badge"
            :class="{ unlocked: achievement.unlocked, locked: !achievement.unlocked }"
          >
            <i :class="achievement.icon"></i>
            <div class="text-lg font-bold mb-1">{{ t(`achievements.${achievement.id}.title`) }}</div>
            <div class="text-sm text-color-secondary">{{ t(`achievements.${achievement.id}.description`) }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- XP Gained Over Time -->
    <section class="mt-5">
      <Card>
        <template #title>{{ t('progress.xpGainedOverTime') }}</template>
        <template #content>
          <div class="chart-container">
            <canvas ref="chartCanvas"></canvas>
          </div>
        </template>
      </Card>
    </section>

    <!-- Recent Activity -->
    <section class="mt-5">
      <h2 class="text-2xl font-bold mb-4">{{ t('progress.recentActivity') }}</h2>
      <Card>
        <template #content>
          <div class="activity-timeline">
            <div 
              v-for="activity in progressStore.activities" 
              :key="activity.id"
              class="activity-item"
            >
              <div class="activity-icon-wrapper">
                <div class="activity-icon">
                  <i :class="activity.icon"></i>
                </div>
                <div class="activity-line"></div>
              </div>
              <div class="activity-content">
                <div class="font-semibold text-color mb-1">{{ activity.title }}</div>
                <div class="text-sm text-color-secondary">{{ activity.time }}</div>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </section>

    <!-- Skills Mastered -->
    <section class="mt-5">
      <h2 class="text-2xl font-bold mb-4">{{ t('progress.skillsMastered') }}</h2>
      <Card>
        <template #content>
          <div class="skills-container">
            <span 
              v-for="skill in progressStore.skills" 
              :key="skill"
              class="skill-tag"
            >
              {{ skill }}
            </span>
          </div>
        </template>
      </Card>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '../stores/user'
import { useProgressStore } from '../stores/progress'
import Card from 'primevue/card'
import ProgressBar from 'primevue/progressbar'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const { t } = useI18n()
const userStore = useUserStore()
const progressStore = useProgressStore()
const chartCanvas = ref(null)

onMounted(() => {
  if (chartCanvas.value) {
    new Chart(chartCanvas.value, {
      type: 'line',
      data: {
        labels: progressStore.xpHistory.map(d => d.day),
        datasets: [{
          label: 'XP Gained',
          data: progressStore.xpHistory.map(d => d.xp),
          borderColor: '#06b6d4',
          backgroundColor: 'rgba(6, 182, 212, 0.1)',
          tension: 0.4,
          fill: true,
          pointRadius: 6,
          pointHoverRadius: 8,
          pointBackgroundColor: '#06b6d4',
          pointBorderColor: '#fff',
          pointBorderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              color: '#e5e7eb',
              font: {
                family: 'Orbitron',
                size: 12
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(255, 255, 255, 0.05)'
            },
            ticks: {
              color: '#9ca3af',
              font: {
                family: 'Orbitron'
              }
            }
          },
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.05)'
            },
            ticks: {
              color: '#9ca3af',
              font: {
                family: 'Orbitron'
              }
            }
          }
        }
      }
    })
  }
})
</script>

<style scoped>
.progress-page {
  max-width: 1400px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 2rem;
}

.activity-timeline {
  display: flex;
  flex-direction: column;
}

.activity-item {
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
}

.activity-item:last-child .activity-line {
  display: none;
}

.activity-icon-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.activity-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(6, 182, 212, 0.1);
  border: 2px solid var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-size: 1.25rem;
  flex-shrink: 0;
  z-index: 1;
}

.activity-line {
  width: 2px;
  flex: 1;
  background: var(--surface-border);
  margin-top: 0.5rem;
}

.activity-content {
  flex: 1;
  padding-top: 0.5rem;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.chart-container {
  height: 300px;
  position: relative;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
}
</style>

