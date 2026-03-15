export type Category = "htmlcss" | "javascript" | "reactnext";

export interface Project {
  title: string;
  slug: string;
  desc: string;
  tech: string;
  category: Category;
  github: string;
  demo?: string;
  image: string;
}
