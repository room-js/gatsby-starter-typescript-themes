export type Meta = {
  name: string;
  content: any;
  property?: undefined;
} | {
  property: string;
  content: any;
  name?: undefined;
}

export interface SeoProps {
  description?: string;
  lang?: string;
  meta?: Meta[];
  title: string;
}