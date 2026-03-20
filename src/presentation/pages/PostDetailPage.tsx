import { useParams } from 'react-router-dom';
import { usePost } from '../../application/hooks/usePost';
import { usePostContext } from '../../application/hooks/usePostContext';

export const PostDetailPage = () => {
  const { id } = useParams();

  const { selectedPost } = usePostContext();

  const { post, isLoading, error } = usePost(id as string);

  const finalPost = selectedPost?.id === id ? selectedPost : post;

  if (isLoading && !finalPost) return <p>Loading...</p>;
  if (error && !finalPost) return <p>{error}</p>;
  if (!finalPost) return <p>Post not found</p>;

  return (
    <div className="container">
      <h1>{finalPost.title}</h1>
      <p>{finalPost.content}</p>
    </div>
  );
};