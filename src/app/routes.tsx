import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PostListPage } from '../presentation/pages/PostListPage';
import { PostDetailPage } from '../presentation/pages/PostDetailPage';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};