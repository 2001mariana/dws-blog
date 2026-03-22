import { useParams } from 'react-router-dom';
import { usePost } from '../../application/hooks/usePost';
import "../styles/post-detail.css";
import { Header } from '../components/Header';

export const PostDetailPage = () => {
  const { id } = useParams();

  const { post, isLoading, error } = usePost(id as string);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return <p>Post not found</p>;

  return (  
  <>
    <Header />
    <div className="container post-detail">
      <h1>{post.title}</h1>

      <img src={post.thumbnail_url} alt={post.title} />

      <p>{post.content}</p>

      <div>
        <strong>Author:</strong> {post.author.name}
      </div>

      <div>
        <strong>Category:</strong>{' '}
        {post.categories.map((cat) => cat.name).join(', ')}
      </div>
    </div>
    </>
  );
};