import { ListStyle } from '@/styles/list-styles';

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  description: string;
  link: string;
  logo: string;
  technologies?: Array<{
    what: string;
    using: string[];
  }>;
  paragraphs: Array<{
    title: string;
    text: string;
    images: Array<{
      src: string;
      alt: string;
      position: string;
      width: number;
      height: number;
      legend: string;
    }>;
    list?: Array<{
      title: string;
      items: string[];
      style?: ListStyle;
    }>;
  }>;
};
