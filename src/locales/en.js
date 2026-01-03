export default {
  // Navigation
  nav: {
    dashboard: 'Dashboard',
    courses: 'Courses',
    progress: 'Progress',
    settings: 'Settings'
  },

  // Common
  common: {
    welcome: 'Welcome Back',
    loading: 'Loading...',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    close: 'Close',
    submit: 'Submit',
    continue: 'Continue',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    start: 'Start',
    complete: 'Complete',
    retry: 'Retry',
    review: 'Review',
    of: 'of'
  },

  // Login
  login: {
    title: 'ImgVoid Academy',
    subtitle: 'Welcome back! Please login to continue your learning journey.',
    email: 'Email Address',
    emailPlaceholder: 'Enter your email',
    password: 'Password',
    passwordPlaceholder: 'Enter your password',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password?',
    loginButton: 'Login',
    noAccount: "Don't have an account?",
    signUp: 'Sign up',
    features: {
      courses: {
        title: 'Expert-Led Courses',
        description: 'Learn from industry professionals'
      },
      certificates: {
        title: 'Earn Certificates',
        description: 'Showcase your achievements'
      },
      community: {
        title: 'Join Community',
        description: 'Connect with learners worldwide'
      }
    }
  },

  // Dashboard
  dashboard: {
    title: 'Welcome Back, {name}!',
    xpProgress: 'Overall Progress',
    currentXP: '{xp} XP',
    xpToNextLevel: '{xp} XP to reach Level {level}',
    streak: 'Learning Streak',
    streakDays: '{days}',
    streakMessage: 'Consecutive days of learning!',
    keepGoing: 'Keep up the great work!',
    continueLesson: 'Continue Last Lesson: SQL Injections',
    courseRecommendations: 'Course Recommendations',
    recentActivity: 'Recent Activity',
    notStarted: 'Not Started',
    inProgress: 'In Progress',
    completed: 'Completed'
  },

  // Courses
  courses: {
    title: 'My Learning Path',
    subtitle: 'Continue your journey to mastery',
    lessons: '{count} Lessons',
    lessonsLabel: 'Lessons',
    duration: '{time}',
    startCourse: 'Start Course',
    continueCourse: 'Continue Learning',
    progress: 'Progress: {percent}%'
  },

  // Course Detail
  courseDetail: {
    overallProgress: 'Overall Progress',
    complete: 'Complete',
    percentComplete: '{percent}% Complete',
    courseLessons: 'Course Lessons',
    lessonDetailsComingSoon: 'Lesson details coming soon...',
    continueLearning: 'Continue Learning',
    takeQuiz: 'Take Quiz',
    courseStats: 'Course Stats',
    completedLessons: 'Completed Lessons',
    timeSpent: 'Time Spent',
    xpEarned: 'XP Earned',
    unlockAfter: 'Unlock after',
    lessonStatus: {
      locked: 'Locked',
      current: 'Current',
      completed: 'Completed'
    }
  },

  // Lesson Detail
  lesson: {
    lesson: 'Lesson',
    lessonProgress: 'Lesson Progress',
    previousLesson: 'Previous Lesson',
    nextLesson: 'Next Lesson',
    completeLesson: 'Complete Lesson'
  },

  // Lesson Content
  lessonContent: {
    learningObjective: 'Learning Objective',
    thisLessonCovers: 'This lesson covers important concepts and practical skills you need to master.',
    objectives: {
      understand: 'Understand core concepts and terminology',
      apply: 'Apply practical techniques to real-world scenarios',
      build: 'Build hands-on projects to reinforce learning',
      develop: 'Develop problem-solving skills'
    },
    comprehensiveIntro: 'In this comprehensive lesson, you\'ll dive deep into the subject matter and gain practical experience through examples and exercises. Our structured approach ensures you build a solid foundation while progressing at your own pace.',
    keyConcepts: 'Key Concepts',
    keyConceptsText: 'Throughout this lesson, we\'ll explore fundamental principles and advanced techniques that professional developers use in their daily work. You\'ll learn industry best practices and common patterns that will serve you well in your career.',
    proTip: '💡 Pro Tip',
    proTipText: 'Take notes as you progress through the lesson. Writing down key concepts helps reinforce your learning and provides a valuable reference for future projects.',
    
    // Course 11 Lesson 3 specific content
    course11: {
      lesson3: {
        title: 'Foundations of User Interface Design',
        intro: 'In the digital age, a well-designed User Interface (UI) is paramount to the success of any application or website. It\'s the visual gateway through which users interact with your product, influencing their perception, satisfaction, and overall experience. This lesson delves into the fundamental principles that govern effective UI design, ensuring that your creations are not only aesthetically pleasing but also intuitively functional.',
        fig1Caption: 'Fig 1: Conceptual layout of a typical user interface showcasing basic elements and their arrangement.',
        goldenRulesTitle: 'The Golden Rules of UI Design',
        goldenRulesIntro: 'While UI design encompasses a vast array of techniques and philosophies, several core principles consistently lead to positive user experiences. Adhering to these "golden rules" will provide a strong foundation for your design process.',
        clarityTitle: 'Clarity and Consistency',
        clarityConsistency: {
          title: 'Clarity and Consistency:',
          description: 'Ensure that all elements are understandable and behave predictably. Consistent use of colors, typography, and interaction patterns reduces cognitive load.'
        },
        feedbackResponsiveness: {
          title: 'Feedback and Responsiveness:',
          description: 'Ensure that users know their actions have been registered. Provide immediate and clear feedback for every interaction, whether it\'s a button press or a form submission.'
        },
        efficiencyForgiveness: {
          title: 'Efficiency and Forgiveness:',
          description: 'Design for efficiency, allowing users to complete tasks quickly. Simultaneously, build in mechanisms for forgiveness, enabling users to easily undo actions or recover from mistakes.'
        },
        hierarchyReadability: {
          title: 'Hierarchy and Readability:',
          description: 'Organize information in a logical hierarchy, making it easy for users to scan and comprehend content. Optimal readability is achieved through appropriate font sizes, line heights, and contrast.'
        },
        visualHierarchyTitle: 'Visual Hierarchy and Layout',
        visualHierarchyIntro: 'Effective visual hierarchy guides the user\'s eye through the interface, emphasizing important elements and creating a natural flow. This is achieved through strategic use of size, color, contrast, and spacing. A well-structured layout ensures that related elements are grouped together, and sufficient whitespace prevents overwhelming the user.',
        fig2Caption: 'Fig 2: Demonstrating visual hierarchy through varying font sizes and colors to guide user attention.',
        patternDescription: 'Consider the F-pattern and Z-pattern common reading behaviors on the web. Designers often leverage these patterns to place critical information in areas users are most likely to focus on, such as the top-left for navigation or the bottom-right for calls to action.',
        feedbackAffordanceTitle: 'Feedback and Affordance',
        feedbackAffordanceIntro: 'Feedback is crucial for user confidence. When a user interacts with an element, a visual or auditory cue confirms that their action has been registered. Affordance refers to the visual characteristics of an object that suggest how it should be used (e.g., a button looks "pushable"). Good UI design makes affordances clear, reducing the learning curve.',
        buttonStates: {
          title: 'Button States:',
          description: 'Highlight buttons on hover, show a different state when clicked, or disable them when an action isn\'t possible.'
        },
        formValidation: {
          title: 'Form Validation:',
          description: 'Provide immediate feedback on form input, indicating whether data is valid or what needs correction.'
        },
        loadingIndicators: {
          title: 'Loading Indicators:',
          description: 'Use spinners or progress bars for operations that take time, reassuring users that the system is working.'
        },
        conclusion: 'By meticulously applying these principles, you can craft interfaces that are not just functional but also delightful and intuitive, guiding users seamlessly through their digital journey. The next lesson will explore practical techniques for prototyping and testing your UI designs.'
      }
    }
  },

  // Lesson Quiz
  lessonQuiz: {
    title: 'Lesson Quiz',
    description: 'Complete this 5-question quiz to finish the lesson and earn your score.',
    subtitle: 'Complete this 5-question quiz to finish the lesson and earn your score.',
    passRequirement: 'You need to score at least 60% to pass and unlock the next lesson.',
    requirement: 'You need to score at least 60% to pass and unlock the next lesson.',
    startQuiz: 'Start Quiz',
    question: 'Question',
    previous: 'Previous',
    next: 'Next',
    submitQuiz: 'Submit Quiz',
    quizPassed: 'Quiz Passed!',
    quizFailed: 'Quiz Failed',
    passed: 'Quiz Passed!',
    failed: 'Quiz Failed',
    correct: 'Correct',
    score: '{score}/{total}',
    percentage: '{percent}% Correct',
    passedMessage: 'Great job! You can now proceed to the next lesson! 🎉',
    failedMessage: 'You need at least 60% to pass. Please review the lesson and try again. 📚',
    passMessage: 'Great job! You can now proceed to the next lesson! 🎉',
    failMessage: 'You need at least 60% to pass. Please review the lesson and try again. 📚',
    xpEarned: 'Experience Points Earned',
    xpLabel: 'Experience Points Earned',
    reviewAnswers: 'Review Answers',
    retryQuiz: 'Retry Quiz'
  },

  // Quiz
  quiz: {
    brand: 'QuizQuest',
    question: 'Question',
    of: 'of',
    previous: 'Previous',
    next: 'Next',
    submitAnswer: 'Submit Answer',
    readyToStart: 'Ready to Start?',
    questionsCount: 'This quiz contains {count} questions.',
    testKnowledge: 'Test your knowledge and earn XP!',
    startQuiz: 'Start Quiz',
    quizComplete: 'Quiz Complete!',
    correct: 'Correct',
    excellentWork: 'Excellent work! You\'ve mastered this topic! 🎉',
    goodJob: 'Good job! Keep practicing to improve further! 👍',
    keepLearning: 'Keep learning! Review the material and try again! 📚',
    xpEarned: 'Experience Points Earned',
    reviewAnswers: 'Review Answers',
    backToCourses: 'Back to Courses',
    explanation: 'Explanation'
  },

  // Progress
  progress: {
    title: 'Your Progress Overview',
    overallProgress: 'Overall Progress',
    level: 'Level',
    noviceCoder: 'Novice Coder',
    toReachLevel: 'to reach Level',
    learningStreak: 'Learning Streak',
    consecutiveDays: 'Consecutive days of learning!',
    yourAchievements: 'Your Achievements',
    xpGainedOverTime: 'XP Gained Over Time',
    recentActivity: 'Recent Activity',
    skillsMastered: 'Skills Mastered'
  },

  // Settings
  settings: {
    title: 'App Settings',
    general: 'GENERAL',
    account: 'ACCOUNT',
    profile: 'Profile',
    dashboard: 'Dashboard',
    notifications: 'Notifications',
    security: 'Security',
    userName: 'User Name',
    userNamePlaceholder: 'Enter your name',
    editAvatar: 'Edit Avatar',
    editProfile: 'Edit Profile Details',
    saveProfile: 'Save Profile',
    profileUpdated: 'Profile Updated',
    profileUpdatedMessage: 'Your profile has been saved successfully',
    language: 'Language',
    appLanguage: 'App Language',
    selectLanguage: 'Select a language',
    theme: 'Theme',
    appTheme: 'App Theme',
    themeDescription: 'Adjust the application\'s visual theme.',
    securityTips: 'Security Tips',
    securityTipsDescription: 'Receive proactive security recommendations.',
    logout: 'Log Out',
    languages: {
      english: 'English',
      turkmen: 'Türkmençe'
    }
  },

  // Achievements
  achievements: {
    1: {
      title: 'First Commit',
      description: 'Made your first contribution.'
    },
    2: {
      title: 'Course Completionist',
      description: 'Completed 5 courses in total.'
    },
    3: {
      title: 'Daily Learner',
      description: 'Maintained a 30-day learning streak.'
    },
    4: {
      title: 'Problem Solver',
      description: 'Solved 10 coding challenges.'
    },
    5: {
      title: 'Community Contributor',
      description: 'Helped 5 peers in forums.'
    },
    6: {
      title: 'Backend Architect',
      description: 'Completed Advanced Node.js course.'
    },
    7: {
      title: 'Frontend Master',
      description: 'Built a responsive web application.'
    },
    8: {
      title: 'UI/UX Innovator',
      description: 'Designed an intuitive user interface.'
    }
  },

  // Courses
  courseTitles: {
    1: 'Advanced React Patterns',
    2: 'UI/UX Design Fundamentals',
    3: 'Introduction to Machine Learning',
    4: 'Digital Marketing Strategies',
    5: 'Blockchain & Cryptocurrency Basics',
    6: 'SQL for Data Analysis',
    7: 'Advanced Malware Analysis',
    8: 'Network Security Fundamentals',
    9: 'Secure Coding Practices (Python)',
    10: 'Ethical Hacking & Pen Testing',
    11: 'Web Development Fundamentals: Full Stack Mastery'
  },

  courseDescriptions: {
    1: 'Dive deep into advanced React patterns like Render Props, Higher-Order Components, and Custom Hooks to build more maintainable and scalable applications.',
    2: 'Learn the core principles of User Interface and User Experience design. From wireframing to prototyping, master the art of creating intuitive and beautiful digital products.',
    3: 'Get started with the exciting world of Machine Learning. This course covers basic algorithms, data preprocessing, and model evaluation using Python.',
    4: 'Master the essentials of digital marketing, including SEO, content marketing, social media strategy, and paid advertising to grow your online presence.',
    5: 'Explore the foundational concepts of blockchain technology, cryptocurrencies, and decentralized finance (DeFi). Understand how this revolutionary tech works.',
    6: 'Learn to query, manage, and analyze data using SQL. This course covers everything from basic SELECT statements to complex joins and aggregations.',
    7: 'Dive deep into identifying and reverse-engineering complex malware threats. Learn cutting-edge techniques.',
    8: 'Master the basics of securing computer networks, including firewalls, VPNs, and intrusion detection systems.',
    9: 'Develop robust and secure Python applications by learning about common vulnerabilities and how to prevent them.',
    10: 'Explore the world of ethical hacking. Discover vulnerabilities and strengthen defenses in systems and applications.',
    11: 'Build and deploy modern web applications from scratch using React, Node.js, and modern databases.'
  },

  instructors: {
    1: 'Dr. Evelyn Reed',
    2: 'Sarah Johnson',
    3: 'Dr. James Chen',
    4: 'Maria Garcia',
    5: 'Michael Brown',
    6: 'Dr. Lisa Wang',
    7: 'Dr. Marcus Steel',
    8: 'Jennifer Adams',
    9: 'Robert Kim',
    10: 'David Martinez',
    11: 'Dr. Evelyn Reed'
  },

  // Lesson titles for UI/UX course (ID: 2)
  lessons: {
    2: {
      1: 'Understanding User Interface',
      2: 'Color Theory and Typography',
      3: 'Layout and Composition',
      4: 'User Research Methods',
      5: 'Wireframing Basics',
      6: 'Prototyping with Figma',
      7: 'Usability Testing',
      8: 'Accessibility in Design',
      9: 'Mobile-First Design',
      10: 'Design Systems',
      11: 'Animation and Micro-interactions',
      12: 'Final Project: Design a Mobile App'
    },
    8: {
      1: 'Introduction to Network Security',
      2: 'Network Protocols and Security',
      3: 'Firewalls and Network Defense',
      4: 'VPN Technologies',
      5: 'Intrusion Detection Systems'
    },
    11: {
      1: 'Introduction to Full Stack Development',
      2: 'Setting Up Your Development Environment',
      3: 'HTML & CSS Deep Dive: Crafting Responsive Layouts',
      4: 'JavaScript Essentials: Modern ES6+ Features',
      5: 'Understanding Databases: SQL & NoSQL Fundamentals',
      6: 'Node.js & Express.js: Building Backend APIs',
      7: 'Version Control with Git and GitHub',
      8: 'React Fundamentals: Components & State Management',
      9: 'Advanced React: Hooks, Context & Performance',
      10: 'Deployment Strategies: AWS, Vercel & Netlify',
      11: 'Security Best Practices for Web Applications',
      12: 'Real-time Applications with WebSockets',
      13: 'Optimizing Web Performance & SEO',
      14: 'Final Project: Build a Full Stack E-commerce Site',
      15: 'Career Development & Portfolio Building'
    }
  },

  // Quiz questions (Cybersecurity Fundamentals)
  quizQuestions: {
    1: {
      1: {
        question: 'What is the primary purpose of a firewall in network security?',
        options: {
          A: 'To encrypt all incoming and outgoing data traffic.',
          B: 'To monitor and control incoming and outgoing network traffic based on predetermined security rules.',
          C: 'To detect and remove malicious software from a computer system.',
          D: 'To create secure, encrypted connections over a less secure network.'
        },
        explanation: 'A firewall acts as a barrier between trusted and untrusted networks, monitoring and controlling traffic based on security rules to prevent unauthorized access.'
      },
      2: {
        question: 'Which encryption algorithm is considered the most secure for modern applications?',
        options: {
          A: 'DES (Data Encryption Standard)',
          B: 'MD5',
          C: 'AES-256 (Advanced Encryption Standard)',
          D: 'ROT13'
        },
        explanation: 'AES-256 is currently the gold standard for encryption, offering strong security and is widely used in government and enterprise applications.'
      },
      3: {
        question: 'What does the term "phishing" refer to in cybersecurity?',
        options: {
          A: 'A technique to scan networks for vulnerabilities',
          B: 'A social engineering attack to trick users into revealing sensitive information',
          C: 'A method to encrypt data transmissions',
          D: 'A type of malware that replicates itself'
        },
        explanation: 'Phishing is a social engineering technique where attackers impersonate legitimate entities to trick victims into providing sensitive information like passwords or credit card numbers.'
      },
      4: {
        question: 'What is a zero-day vulnerability?',
        options: {
          A: 'A vulnerability that has been known for zero days',
          B: 'A security flaw that is exploited before the vendor releases a patch',
          C: 'A vulnerability that takes zero days to fix',
          D: 'A bug that causes zero damage'
        },
        explanation: 'A zero-day vulnerability is a security flaw that is unknown to the software vendor and is exploited by attackers before a patch is available, making it extremely dangerous.'
      },
      5: {
        question: 'Which of the following is NOT a component of the CIA triad in information security?',
        options: {
          A: 'Confidentiality',
          B: 'Integrity',
          C: 'Availability',
          D: 'Accountability'
        },
        explanation: 'The CIA triad consists of Confidentiality, Integrity, and Availability. While Accountability is important in security, it is not part of the CIA triad.'
      }
    }
  },

  // Lesson Quiz Questions
  lessonQuizzes: {
    '2-1': {
      title: 'Quiz: Understanding User Interface',
      questions: {
        1: {
          question: 'What is the primary goal of User Interface (UI) design?',
          options: {
            A: 'To make the application visually appealing.',
            B: 'To ensure the application is easy and intuitive to use.',
            C: 'To implement complex backend logic.',
            D: 'To optimize database performance.'
          },
          explanation: 'The primary goal of UI design is to create interfaces that are easy to use, efficient, and enjoyable for users.'
        },
        2: {
          question: 'Which of the following is NOT a core principle of good UI design?',
          options: {
            A: 'Clarity',
            B: 'Consistency',
            C: 'Complexity',
            D: 'Feedback'
          },
          explanation: 'Good UI design aims for simplicity and ease of use, not complexity.'
        },
        3: {
          question: 'What does "affordance" refer to in UI design?',
          options: {
            A: 'The cost of developing the interface.',
            B: 'The visual characteristics that suggest how an object should be used.',
            C: 'The ability to customize the interface.',
            D: 'The speed at which the interface loads.'
          },
          explanation: 'Affordance refers to the visual cues that tell a user what an object can do or how it can be interacted with.'
        },
        4: {
          question: 'Why is visual hierarchy important in UI design?',
          options: {
            A: 'To make the interface look more modern.',
            B: 'To guide the user\'s eye and emphasize important elements.',
            C: 'To reduce the number of elements on the screen.',
            D: 'To ensure compatibility across different browsers.'
          },
          explanation: 'Visual hierarchy helps users quickly understand the most important information and navigate the interface efficiently.'
        },
        5: {
          question: 'What is the benefit of providing immediate feedback in a UI?',
          options: {
            A: 'It makes the application run faster.',
            B: 'It reassures users that their actions have been registered.',
            C: 'It reduces the need for error messages.',
            D: 'It automatically corrects user input.'
          },
          explanation: 'Immediate feedback confirms to users that their input was received and processed, improving confidence and user experience.'
        }
      }
    },
    '2-2': {
      title: 'Quiz: Color Theory and Typography',
      questions: {
        1: {
          question: 'Which color model is typically used for digital screens?',
          options: {
            A: 'CMYK',
            B: 'RGB',
            C: 'Pantone',
            D: 'Grayscale'
          },
          explanation: 'RGB (Red, Green, Blue) is an additive color model used for displaying images on electronic devices like screens.'
        },
        2: {
          question: 'What is the term for the space between individual characters in typography?',
          options: {
            A: 'Leading',
            B: 'Kerning',
            C: 'Tracking',
            D: 'Baseline'
          },
          explanation: 'Kerning is the process of adjusting the space between individual characters to improve visual appeal and readability.'
        },
        3: {
          question: 'Which type of font is generally considered easier to read on digital screens for body text?',
          options: {
            A: 'Serif',
            B: 'Sans-serif',
            C: 'Script',
            D: 'Display'
          },
          explanation: 'Sans-serif fonts are often preferred for body text on digital screens due to their clean lines and better readability at smaller sizes.'
        },
        4: {
          question: 'What is the purpose of a complementary color scheme?',
          options: {
            A: 'To create a harmonious and calm feeling.',
            B: 'To provide high contrast and visual impact.',
            C: 'To use only shades of a single color.',
            D: 'To mimic natural color gradients.'
          },
          explanation: 'Complementary colors are opposite each other on the color wheel and create strong contrast, often used to draw attention.'
        },
        5: {
          question: 'What is "line-height" in typography?',
          options: {
            A: 'The width of a text line.',
            B: 'The space between lines of text.',
            C: 'The height of the font characters.',
            D: 'The distance from the baseline to the cap height.'
          },
          explanation: 'Line-height (or leading) is the vertical distance between lines of text, affecting readability and visual density.'
        }
      }
    },
    '11-3': {
      title: 'Quiz: HTML & CSS Deep Dive',
      questions: {
        1: {
          question: 'What does HTML stand for?',
          options: {
            A: 'Hyper Text Markup Language',
            B: 'High Tech Modern Language',
            C: 'Home Tool Markup Language',
            D: 'Hyperlinks and Text Markup Language'
          },
          explanation: 'HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages.'
        },
        2: {
          question: 'Which CSS property is used to change the text color?',
          options: {
            A: 'text-color',
            B: 'font-color',
            C: 'color',
            D: 'text-style'
          },
          explanation: 'The "color" property in CSS is used to set the color of text.'
        },
        3: {
          question: 'What is the purpose of CSS Flexbox?',
          options: {
            A: 'To add animations',
            B: 'To create flexible and responsive layouts',
            C: 'To style text',
            D: 'To add JavaScript functionality'
          },
          explanation: 'CSS Flexbox is a layout model that allows elements to align and distribute space within a container efficiently.'
        },
        4: {
          question: 'Which HTML tag is used for the largest heading?',
          options: {
            A: '<heading>',
            B: '<h6>',
            C: '<h1>',
            D: '<head>'
          },
          explanation: 'The <h1> tag is used for the largest heading in HTML.'
        },
        5: {
          question: 'What does CSS stand for?',
          options: {
            A: 'Computer Style Sheets',
            B: 'Cascading Style Sheets',
            C: 'Creative Style Sheets',
            D: 'Colorful Style Sheets'
          },
          explanation: 'CSS stands for Cascading Style Sheets, which is used to style and layout web pages.'
        }
      }
    },
    '8-1': {
      title: 'Quiz: Introduction to Network Security',
      questions: {
        1: {
          question: 'What is network security?',
          options: {
            A: 'A type of computer hardware',
            B: 'Protection of networks and their services from unauthorized access',
            C: 'A programming language',
            D: 'A web browser'
          },
          explanation: 'Network security refers to the policies and practices adopted to prevent and monitor unauthorized access, misuse, modification, or denial of a computer network.'
        },
        2: {
          question: 'Which of the following is a common network threat?',
          options: {
            A: 'Malware',
            B: 'HTML',
            C: 'CSS',
            D: 'JavaScript'
          },
          explanation: 'Malware is a common network threat that can damage or disrupt systems and steal sensitive information.'
        },
        3: {
          question: 'What does VPN stand for?',
          options: {
            A: 'Very Private Network',
            B: 'Virtual Private Network',
            C: 'Visible Public Network',
            D: 'Virtual Public Network'
          },
          explanation: 'VPN stands for Virtual Private Network, which creates a secure and encrypted connection over a less secure network.'
        },
        4: {
          question: 'What is the main purpose of encryption?',
          options: {
            A: 'To speed up data transfer',
            B: 'To protect data from unauthorized access',
            C: 'To compress files',
            D: 'To delete data'
          },
          explanation: 'Encryption is the process of converting information into a code to prevent unauthorized access.'
        },
        5: {
          question: 'Which protocol is commonly used to secure web traffic?',
          options: {
            A: 'FTP',
            B: 'HTTP',
            C: 'HTTPS',
            D: 'SMTP'
          },
          explanation: 'HTTPS (Hypertext Transfer Protocol Secure) is an extension of HTTP that uses encryption to secure communication over a computer network.'
        }
      }
    }
  }
}

