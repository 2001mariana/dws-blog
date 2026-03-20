import { useEffect, useState } from 'react';
import type { Post } from '../../domain/entities/Post';
import { PostRepositoryImpl } from '../../infrastructure/repositories/PostRepositoy';

export const usePost = (id: string) => {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const repository = new PostRepositoryImpl();

    repository
      .getById(id)
      .then(setPost)
      .catch(() => setError('Failed to fetch post'))
      .finally(() => setIsLoading(false));
  }, [id]);

  return { post, isLoading, error };
};