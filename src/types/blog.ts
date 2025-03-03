export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: {
    url: string;
    alt: string;
  };
  featured: boolean;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
} 