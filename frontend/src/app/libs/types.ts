export interface IProject {
  title: string;
  description: string;
  testimonial: string;
  purposeAndGoal: string;
  demoURL: string;
  githubURL: string;
  techStackItems:  IOption[] | null;
  tools:  IOption[] | null;
}

export interface ITechStackItem {
  //   id?: Number;
  value: string;
  label: string;
}

export interface ITool {
  id: Number;
  value: string;
  label: string;
}

export interface IOption {
  value: string;
  label: string;
  id: string
  name?: string
}
