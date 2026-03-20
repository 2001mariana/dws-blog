import { useParams } from 'react-router-dom';
import { usePost } from '../../application/hooks/usePost';

export const PostDetailPage = () => {
  const { id } = useParams();

  const { post, isLoading, error } = usePost(id as string);

  if (isLoading) return <p>Loading post...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};