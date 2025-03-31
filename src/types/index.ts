export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  image: string;
  title: string;
  description: string;
}

export interface CompanyInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
}