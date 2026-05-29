export interface ISocial {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export interface ISkill {
  name: string;
  level: number;
}

export interface IValue {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export type CategoryType = 'Work' | 'Pet' | 'About Me';

export interface ITimelineItem {
  id: number;
  category: CategoryType;
  date: string;
  title: string;
  subtitle: string | string[];
  description: string;
  code?: string;
  link?: string;
  img: string;
  isInProgress?: boolean;
}

export interface IContactInfo {
  label: string;
  value: string;
  iconType: 'location' | 'clock' | 'email';
}

export interface IContactForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface ISendEmailResult {
  success: boolean;
  error?: string;
  details?: string;
}