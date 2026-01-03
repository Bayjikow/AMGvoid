import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCoursesStore } from '../stores/courses'

export function useTranslatedCourses() {
  const { t } = useI18n()
  const coursesStore = useCoursesStore()

  const translatedCourses = computed(() => {
    return coursesStore.courses.map(course => ({
      ...course,
      title: t(`courseTitles.${course.id}`),
      description: t(`courseDescriptions.${course.id}`),
      instructor: t(`instructors.${course.id}`)
    }))
  })

  return {
    translatedCourses
  }
}

