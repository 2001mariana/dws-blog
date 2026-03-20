import { usePosts } from '../../application/hooks/usePosts';
import { PostCard } from '../components/PostCard';

export const PostListPage = () => {
  const { posts, isLoading, error } = usePosts();

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h1>Blog Posts</h1>

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};