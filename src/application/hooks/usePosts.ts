import { useEffect, useState } from 'react';
import { PostRepositoryImpl } from '../../infrastructure/repositories/PostRepositoy';
import type { Post } from '../../domain/entities/Post';

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const repository = new PostRepositoryImpl();

    repository
      .getAll()
      .then(setPosts)
      .catch(() => setError('Failed to fetch posts'))
      .finally(() => setIsLoading(false));
  }, []);

  return { posts, isLoading, error };
};