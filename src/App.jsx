import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './comp/publicTab/Home';
import Contentpage from './comp/publicTab/Contentpage';
import TypesOfNews from './comp/publicTab/TypesOfNews';
import Login from './comp/publicTab/Login';

import PublicLayout from './comp/layout/PublicLayout';
import AdminLayout from './comp/layout/AdminLayout';
import PostData from './comp/AdminFile/PostData';
import ListData from './comp/AdminFile/ListData';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="contentPage" element={<Contentpage />} />
          <Route path="typeOfNews" element={<TypesOfNews />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index path='post' element={<PostData />} />
          <Route  path='listdata' element={<ListData />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
