import { useState, type ReactNode } from 'react';
import { PostContext } from './PostContext';
import type { Post } from '../../domain/entities/Post';

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <PostContext.Provider value={{ selectedPost, setSelectedPost }}>
      {children}
    </PostContext.Provider>
  );
};