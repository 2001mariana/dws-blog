import { useNavigate } from 'react-router-dom';
import type { Post } from '../../domain/entities/Post';
import { usePostContext } from '../../application/hooks/usePostContext';

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  const navigate = useNavigate();
      const { setSelectedPost } = usePostContext();
    
    const handleClickPostById = () => {
        setSelectedPost(post);
        navigate(`/post/${post.id}`);
    }

  return (
    <div
      className="post-card"
      onClick={handleClickPostById}
    >
      <h2>{post.title}</h2>
      <p>{post.content.substring(0, 100)}...</p>
    </div>
  );
};