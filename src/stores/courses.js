import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCoursesStore = defineStore('courses', () => {
  const courses = ref([
    {
      id: 1,
      title: 'Advanced React Patterns',
      description: 'Dive deep into advanced React patterns like Render Props, Higher-Order Components, and Custom Hooks to build more maintainable and scalable applications.',
      icon: 'pi pi-code',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
      progress: 75,
      status: 'in-progress',
      lessons: 15,
      duration: '8 hours 30 min',
      instructor: 'Dr. Evelyn Reed'
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      description: 'Learn the core principles of User Interface and User Experience design. From wireframing to prototyping, master the art of creating intuitive and beautiful digital products.',
      icon: 'pi pi-palette',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      progress: 30,
      status: 'in-progress',
      lessons: 12,
      duration: '6 hours 45 min',
      instructor: 'Sarah Johnson',
      detailedLessons: [
        {
          id: 1,
          title: 'Understanding User Interface',
          duration: '25 min',
          status: 'completed',
          progress: 100
        },
        {
          id: 2,
          title: 'Color Theory and Typography',
          duration: '30 min',
          status: 'completed',
          progress: 100
        },
        {
          id: 3,
          title: 'Layout and Composition',
          duration: '35 min',
          status: 'current',
          progress: 60
        },
        {
          id: 4,
          title: 'User Research Methods',
          duration: '40 min',
          status: 'locked',
          unlockAfter: 'Lesson 3'
        },
        {
          id: 5,
          title: 'Wireframing Basics',
          duration: '45 min',
          status: 'locked',
          unlockAfter: 'Lesson 4'
        },
        {
          id: 6,
          title: 'Prototyping with Figma',
          duration: '50 min',
          status: 'locked',
          unlockAfter: 'Lesson 5'
        },
        {
          id: 7,
          title: 'Usability Testing',
          duration: '35 min',
          status: 'locked',
          unlockAfter: 'Lesson 6'
        },
        {
          id: 8,
          title: 'Accessibility in Design',
          duration: '40 min',
          status: 'locked',
          unlockAfter: 'Lesson 7'
        },
        {
          id: 9,
          title: 'Mobile-First Design',
          duration: '45 min',
          status: 'locked',
          unlockAfter: 'Lesson 8'
        },
        {
          id: 10,
          title: 'Design Systems',
          duration: '50 min',
          status: 'locked',
          unlockAfter: 'Lesson 9'
        },
        {
          id: 11,
          title: 'Animation and Micro-interactions',
          duration: '40 min',
          status: 'locked',
          unlockAfter: 'Lesson 10'
        },
        {
          id: 12,
          title: 'Final Project: Design a Mobile App',
          duration: '90 min',
          status: 'locked',
          unlockAfter: 'Lesson 11'
        }
      ]
    },
    {
      id: 3,
      title: 'Introduction to Machine Learning',
      description: 'Get started with the exciting world of Machine Learning. This course covers basic algorithms, data preprocessing, and model evaluation using Python.',
      icon: 'pi pi-chart-line',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
      progress: 0,
      status: 'not-started',
      lessons: 20,
      duration: '12 hours',
      instructor: 'Dr. James Chen'
    },
    {
      id: 4,
      title: 'Digital Marketing Strategies',
      description: 'Master the essentials of digital marketing, including SEO, content marketing, social media strategy, and paid advertising to grow your online presence.',
      icon: 'pi pi-megaphone',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      progress: 90,
      status: 'in-progress',
      lessons: 18,
      duration: '9 hours 15 min',
      instructor: 'Maria Garcia'
    },
    {
      id: 5,
      title: 'Blockchain & Cryptocurrency Basics',
      description: 'Explore the foundational concepts of blockchain technology, cryptocurrencies, and decentralized finance (DeFi). Understand how this revolutionary tech works.',
      icon: 'pi pi-link',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
      progress: 50,
      status: 'in-progress',
      lessons: 14,
      duration: '7 hours 20 min',
      instructor: 'Michael Brown'
    },
    {
      id: 6,
      title: 'SQL for Data Analysis',
      description: 'Learn to query, manage, and analyze data using SQL. This course covers everything from basic SELECT statements to complex joins and aggregations.',
      icon: 'pi pi-database',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80',
      progress: 0,
      status: 'not-started',
      lessons: 16,
      duration: '8 hours',
      instructor: 'Dr. Lisa Wang'
    },
    {
      id: 7,
      title: 'Advanced Malware Analysis',
      description: 'Dive deep into identifying and reverse-engineering complex malware threats. Learn cutting-edge techniques.',
      icon: 'pi pi-shield',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
      progress: 75,
      status: 'in-progress',
      lessons: 22,
      duration: '15 hours',
      instructor: 'Dr. Marcus Steel'
    },
    {
      id: 8,
      title: 'Network Security Fundamentals',
      description: 'Master the basics of securing computer networks, including firewalls, VPNs, and intrusion detection systems.',
      icon: 'pi pi-lock',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      progress: 0,
      status: 'not-started',
      lessons: 18,
      duration: '10 hours',
      instructor: 'Jennifer Adams',
      detailedLessons: [
        {
          id: 1,
          title: 'Introduction to Network Security',
          duration: '30 min',
          status: 'current',
          progress: 0
        },
        {
          id: 2,
          title: 'Network Protocols and Security',
          duration: '35 min',
          status: 'locked',
          unlockAfter: 'Lesson 1'
        },
        {
          id: 3,
          title: 'Firewalls and Network Defense',
          duration: '40 min',
          status: 'locked',
          unlockAfter: 'Lesson 2'
        },
        {
          id: 4,
          title: 'VPN Technologies',
          duration: '35 min',
          status: 'locked',
          unlockAfter: 'Lesson 3'
        },
        {
          id: 5,
          title: 'Intrusion Detection Systems',
          duration: '45 min',
          status: 'locked',
          unlockAfter: 'Lesson 4'
        }
      ]
    },
    {
      id: 9,
      title: 'Secure Coding Practices (Python)',
      description: 'Develop robust and secure Python applications by learning about common vulnerabilities and how to prevent them.',
      icon: 'pi pi-code',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80',
      progress: 40,
      status: 'in-progress',
      lessons: 14,
      duration: '8 hours',
      instructor: 'Robert Kim'
    },
    {
      id: 10,
      title: 'Ethical Hacking & Pen Testing',
      description: 'Explore the world of ethical hacking. Discover vulnerabilities and strengthen defenses in systems and applications.',
      icon: 'pi pi-eye',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
      progress: 100,
      status: 'completed',
      lessons: 25,
      duration: '18 hours',
      instructor: 'David Martinez'
    },
    {
      id: 11,
      title: 'Web Development Fundamentals: Full Stack Mastery',
      description: 'Build and deploy modern web applications from scratch using React, Node.js, and modern databases.',
      icon: 'pi pi-globe',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
      progress: 70,
      status: 'in-progress',
      lessons: 15,
      duration: '8 hours 30 min',
      instructor: 'Dr. Evelyn Reed',
      detailedLessons: [
        {
          id: 1,
          title: 'Introduction to Full Stack Development',
          duration: '15 min',
          status: 'completed'
        },
        {
          id: 2,
          title: 'Setting Up Your Development Environment',
          duration: '20 min',
          status: 'completed'
        },
        {
          id: 3,
          title: 'HTML & CSS Deep Dive: Crafting Responsive Layouts',
          duration: '45 min',
          status: 'current',
          progress: 75
        },
        {
          id: 4,
          title: 'JavaScript Essentials: Modern ES6+ Features',
          duration: '60 min',
          status: 'current',
          progress: 30
        },
        {
          id: 5,
          title: 'Understanding Databases: SQL & NoSQL Fundamentals',
          duration: '50 min',
          status: 'locked',
          unlockAfter: 'Lesson 4'
        },
        {
          id: 6,
          title: 'Node.js & Express.js: Building Backend APIs',
          duration: '55 min',
          status: 'locked',
          unlockAfter: 'Lesson 5'
        },
        {
          id: 7,
          title: 'Version Control with Git and GitHub',
          duration: '40 min',
          status: 'locked',
          unlockAfter: 'Lesson 6'
        },
        {
          id: 8,
          title: 'React Fundamentals: Components & State Management',
          duration: '65 min',
          status: 'locked',
          unlockAfter: 'Lesson 7'
        },
        {
          id: 9,
          title: 'Advanced React: Hooks, Context & Performance',
          duration: '70 min',
          status: 'locked',
          unlockAfter: 'Lesson 8'
        },
        {
          id: 10,
          title: 'Deployment Strategies: AWS, Vercel & Netlify',
          duration: '45 min',
          status: 'locked',
          unlockAfter: 'Lesson 9'
        },
        {
          id: 11,
          title: 'Security Best Practices for Web Applications',
          duration: '50 min',
          status: 'locked',
          unlockAfter: 'Lesson 10'
        },
        {
          id: 12,
          title: 'Real-time Applications with WebSockets',
          duration: '55 min',
          status: 'locked',
          unlockAfter: 'Lesson 11'
        },
        {
          id: 13,
          title: 'Optimizing Web Performance & SEO',
          duration: '45 min',
          status: 'locked',
          unlockAfter: 'Lesson 12'
        },
        {
          id: 14,
          title: 'Final Project: Build a Full Stack E-commerce Site',
          duration: '120 min',
          status: 'locked',
          unlockAfter: 'Lesson 13'
        },
        {
          id: 15,
          title: 'Career Development & Portfolio Building',
          duration: '30 min',
          status: 'locked',
          unlockAfter: 'Final Project'
        }
      ]
    }
  ])

  const activeCourse = ref(null)
  const activeLesson = ref(null)

  const inProgressCourses = computed(() => {
    return courses.value.filter(c => c.status === 'in-progress')
  })

  const completedCourses = computed(() => {
    return courses.value.filter(c => c.status === 'completed')
  })

  function getCourseById(id) {
    return courses.value.find(c => c.id === parseInt(id))
  }

  function setActiveCourse(courseId) {
    activeCourse.value = getCourseById(courseId)
  }

  function setActiveLesson(lessonId) {
    if (activeCourse.value && activeCourse.value.detailedLessons) {
      activeLesson.value = activeCourse.value.detailedLessons.find(l => l.id === parseInt(lessonId))
    }
  }

  function updateCourseProgress(courseId, progress) {
    const course = getCourseById(courseId)
    if (course) {
      course.progress = progress
      if (progress >= 100) {
        course.status = 'completed'
      } else if (progress > 0) {
        course.status = 'in-progress'
      }
    }
  }

  function completeLesson(courseId, lessonId) {
    const course = getCourseById(courseId)
    if (course && course.detailedLessons) {
      const lesson = course.detailedLessons.find(l => l.id === lessonId)
      if (lesson) {
        lesson.status = 'completed'
        lesson.progress = 100
        
        // Unlock next lesson
        const currentIndex = course.detailedLessons.findIndex(l => l.id === lessonId)
        if (currentIndex < course.detailedLessons.length - 1) {
          const nextLesson = course.detailedLessons[currentIndex + 1]
          if (nextLesson.status === 'locked') {
            nextLesson.status = 'current'
          }
        }
        
        // Update course progress
        const completedLessons = course.detailedLessons.filter(l => l.status === 'completed').length
        const totalLessons = course.detailedLessons.length
        course.progress = Math.round((completedLessons / totalLessons) * 100)
      }
    }
  }

  return {
    courses,
    activeCourse,
    activeLesson,
    inProgressCourses,
    completedCourses,
    getCourseById,
    setActiveCourse,
    setActiveLesson,
    updateCourseProgress,
    completeLesson
  }
})

