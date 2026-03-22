
import type { Post } from '../../domain/entities/Post';
import type { PostRepository } from '../../domain/repositories/PostRepositories';
import { httpClient } from '../api/httpClient';

export class PostRepositoryImpl implements PostRepository {
  async getAll(): Promise<Post[]> {
    const response = await httpClient.get('/posts');
    return response.data.map((post: Post) => ({
  id: post.id,
  title: post.title,
  description: post.content,
  imageUrl: post.thumbnail_url,
}));;
  }

  async getById(id: string): Promise<Post> {
    const response = await httpClient.get(`/posts/${id}`);
    return response.data;
  }
}