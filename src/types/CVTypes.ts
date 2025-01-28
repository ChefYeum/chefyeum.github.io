export interface Experience {
  title: string;
  companies: Company[];
  period: string;
  details: { description: string; technologies?: string[] }[];
}

export interface Company {
  name: string; // changed from 'company' to 'name'
  period: string;
  details: { description: string; technologies?: string[] }[];
}

export interface Education {
  title: string;
  organization: string;
  period: string;
  details: {
    description: string;
    courses?: { [category: string]: string[] };
    courseworks?: string[];
  }[];
}

export interface Project {
  title: string;
  description?: string;
  details?: { description: string }[];
  awards?: string[]; // added 'awards' field
}

export interface Contribution {
  description: string;
  repository?: string; // added 'repository' field
}

export interface CVContents {
  experience: Experience[];
  education: Education[];
  projects_and_awards: Project[];
  open_source_contributions: Contribution[];
}
