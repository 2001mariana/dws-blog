import type { Post } from "../entities/Post";


export interface PostRepository {
  getAll(): Promise<Post[]>;
  getById(id: string): Promise<Post>;
}