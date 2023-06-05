type Experience = {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  logo: string;
  logoBg: string;
  description: string[];
};

type Technologies = {
  name: string;
  icon: string;
};

type Project = {
  name: string;
  image: string;
  link: string;
  repo: string;
  techStack: string[];
};

export type { Experience, Technologies, Project };
