import { createContext } from 'react';
import type { Post } from '../../domain/entities/Post';

export interface PostContextData {
  selectedPost: Post | null;
  setSelectedPost: (post: Post) => void;
}

export const PostContext = createContext<PostContextData | undefined>(undefined);