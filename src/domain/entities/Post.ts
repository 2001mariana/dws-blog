import type { Author } from "./Author";
import type { Category } from "./Category";


export interface Post {
  id: string;
  title: string;
  content: string;
  thumbnail_url: string;
  authorId: string;
  author: Author; 
  categories: Category[]; 
  createdAt: string;
  updatedAt: string;
  description: string;
  imageUrl: string;
}