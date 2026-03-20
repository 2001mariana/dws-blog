import { useNavigate } from 'react-router-dom';
import type { Post } from '../../domain/entities/Post';

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="post-card"
      onClick={() => navigate(`/post/${post.id}`)}
    >
      <h2>{post.title}</h2>
      <p>{post.content.substring(0, 100)}...</p>
    </div>
  );
};