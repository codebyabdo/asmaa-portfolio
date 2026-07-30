export interface FeatureProject {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  accuracy: string;
  languages: string;
  image: string;
  description: string;
}

export interface ComparisonData {
  title: string;
  original: string;
  localized: string;
  reasoning: string;
  tag: string;
}
