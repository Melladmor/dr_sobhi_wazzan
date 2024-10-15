export interface HeaderDataI {
  id: string;
  title: string;
}

export interface HeroSectionI {
  title: string;
  subTitle: string;
  videoLink: string;
  image: string;
}

export interface AboutUsI {
  title: string;
  description: string;
  image: string;
}

export interface expertiseI {
  id: number;
  image: string;
  title: string;
  description: string;
}
export interface FildsOfExpertiseI {
  title: string;
  subTitle: string;
  expertise: expertiseI[];
}

export interface OurVisionI {
  visionTitle: string;
  visionDescription: string;
  missionTile: string;
  missionDescription: string;
  videoLink: string;
}
export type TestimonialsT = {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
};

export type ClientsT = {
  id: number;
  image: string;
};
export interface TestimonialsI {
  title: string;
  tesimoials: TestimonialsT[];
  clients: ClientsT[];
}

export type CoursesT = {
  id: number;
  image: string;
  title: string;
  description: string;
};

export interface CoursesI {
  title: string;
  subTitle: string;
  courses: CoursesT[];
}

export type SocialMediaT = {
  id: number;
  icon: string;
  link: string;
};

export interface FooterI {
  sections: HeaderDataI[];
  socialMedia: SocialMediaT[];
}
