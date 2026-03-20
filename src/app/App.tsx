import { PostProvider } from '../application/context/PostProvider';
import { AppRoutes } from './routes';

export const App = () => {
  return (
    <PostProvider>
      <AppRoutes />
    </PostProvider>
  );
};