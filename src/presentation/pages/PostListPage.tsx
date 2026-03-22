import { usePosts } from '../../application/hooks/usePosts';
import { Header } from '../components/Header';
import { PostCard } from '../components/PostCard';
import "../styles/post-list.css";
export const PostListPage = () => {
  const { posts, isLoading, error } = usePosts();

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
    <Header />
    <div className="container">
      <div className="posts-grid">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
    </>
  );
};