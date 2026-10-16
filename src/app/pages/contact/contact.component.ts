import { Component } from '@angular/core';

export interface ContactCategory {
  title: string;
  badge: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly pageTitle = "Let's Connect";
  readonly pageSubtitle = "Whether you are exploring engineering opportunities, discussing enterprise architecture, or interested in my technical work, I welcome the conversation.";
  
  readonly emailAddress = 'contact@noxolomandisamkhungo.co.za';
  readonly linkedinUrl = 'https://linkedin.com/in/NoxoloMkhungo';
  readonly githubUrl = 'https://github.com/NMandisa';

  readonly contactCategories: ContactCategory[] = [
    {
      title: 'Professional Opportunities',
      badge: 'Recruitment & Roles',
      icon: 'bi-briefcase',
      description: 'For engineering positions, technical leadership roles, and full-time professional collaborations.'
    },
    {
      title: 'Technology & Consulting',
      badge: 'Architecture & Systems',
      icon: 'bi-diagram-3',
      description: 'For discussions around enterprise Java architecture, SAP Commerce Cloud integrations, and backend solution design.'
    },
    {
      title: 'Technical Discussions',
      badge: 'POCs & Design',
      icon: 'bi-code-slash',
      description: 'For inquiries regarding portfolio proof-of-concepts, domain modeling, and backend engineering practices.'
    }
  ];
}