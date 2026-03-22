import { useNavigate } from 'react-router-dom';
import type { Post } from '../../domain/entities/Post';
import { usePostContext } from '../../application/hooks/usePostContext';
import "../styles/post-card.css";

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
   <div onClick={handleClickPostById} className="post-card">
  <img src={post.imageUrl} className="post-image" />
  
  <div className="post-content">
    <h3 className="post-title">{post.title}</h3>
    <p className="post-description">{post.description}</p>
  </div>
</div>
  );
};