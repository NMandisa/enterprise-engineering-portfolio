import { ContactChannel, EngagementCategory } from '../models/contact.model';

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 'email',
    label: 'Direct Email',
    value: 'contact@noxolomandisamkhungo.co.za',
    icon: 'bi-envelope-at-fill',
    href: 'mailto:contact@noxolomandisamkhungo.co.za'
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/NoxoloMkhungo',
    icon: 'bi-linkedin',
    href: 'https://linkedin.com/in/NoxoloMkhungo'
  },
  {
    id: 'github',
    label: 'GitHub Profile',
    value: 'github.com/NMandisa',
    icon: 'bi-github',
    href: 'https://github.com/NMandisa'
  }
];

export const ENGAGEMENT_CATEGORIES: EngagementCategory[] = [
  {
    id: 'talks',
    title: 'Speaking Engagements & Technical Talks',
    badge: 'Community & Events',
    icon: 'bi-mic-fill',
    description: 'Invited presentations for tech conferences, developer meetups, panel discussions, and community forums.',
    targetAudience: 'Conferences, Meetups, Developer Communities',
    suggestedTopics: ['Enterprise Java 21', 'Backend Systems Architecture', 'Career Transitions in Tech']
  },
  {
    id: 'mentorship',
    title: 'Student Mentorship & Career Guidance',
    badge: 'Talent Development',
    icon: 'bi-mortarboard-fill',
    description: '1-on-1 or group guidance for students, graduates, and early-career developers navigating software engineering.',
    targetAudience: 'University Students, Bootcamp Graduates, Junior Devs',
    suggestedTopics: ['Portfolio Architecture', 'Java/Spring Learning Paths', 'Industry Readiness']
  },
  {
    id: 'training',
    title: 'Technical Training & Workshops',
    badge: 'Skills & Bootcamps',
    icon: 'bi-easel-fill',
    description: 'Practical, hands-on learning clusters and structured workshops for developer teams and student groups.',
    targetAudience: 'Developer Cohorts, Student Guilds, Engineering Teams',
    suggestedTopics: ['REST API Design', 'Relational Database Migration', 'Clean Domain Modeling']
  },
  {
    id: 'schools',
    title: 'School & Educational Outreach',
    badge: 'Academic & STEM',
    icon: 'bi-building-fill-gear',
    description: 'Educational visits, career day talks, and STEM awareness sessions for schools and TVET colleges.',
    targetAudience: 'High Schools, Colleges, STEM Career Fairs',
    suggestedTopics: ['Careers in Software Engineering', 'Introduction to Coding', 'Building Digital Products']
  },
  {
    id: 'consulting',
    title: 'Enterprise Software Engineering & Consulting',
    badge: 'Engineering & Architecture',
    icon: 'bi-diagram-3-fill',
    description: 'Enterprise Java and Spring application engineering, REST API development, architecture reviews, performance profiling, database optimisation, and production troubleshooting.',
    targetAudience: 'Startups, SMEs, Enterprise Engineering Teams',
    suggestedTopics: [
      'Java & Spring Application Architecture',
      'Spring MVC & Spring Boot Development',
      'RESTful Web Services & API Engineering',
      'Production Troubleshooting & Root-Cause Analysis',
      'Performance Profiling & Persistence Optimisation',
      'Maven & Gradle Build Tooling',
      'System Integration & Microservice Boundaries'
    ]
  }
];