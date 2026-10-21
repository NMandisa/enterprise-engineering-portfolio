export interface EngagementCategory {
  id: string;
  title: string;
  badge: string;
  icon: string;
  description: string;
  targetAudience: string;
  suggestedTopics: string[];
}

export interface ContactChannel {
  id: 'email' | 'linkedin' | 'github';
  label: string;
  value: string;
  icon: string;
  href: string;
}