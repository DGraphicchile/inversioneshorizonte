import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import DashboardLayout from './components/layout/DashboardLayout';
import HomePage from './pages/HomePage';
import MarketplacePage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/account/DashboardPage';
import MyProjectsPage from './pages/account/MyProjectsPage';
import ProjectViewPage from './pages/account/ProjectViewPage';
import AccountPage from './pages/account/AccountPage';
import GalleryPage from './pages/account/GalleryPage';

function ScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/entrar" replace />;
  return <>{children}</>;
}

function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyectos" element={<MarketplacePage />} />
          <Route path="/proyectos/:slug" element={<ProjectDetailPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToAnchor />
        <Routes>
          <Route path="/entrar" element={<LoginPage />} />
          <Route
            path="/cuenta"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path="proyectos" element={<MyProjectsPage />} />
            <Route path="proyectos/:id" element={<ProjectViewPage />} />
            <Route path="perfil" element={<AccountPage />} />
            <Route path="galeria" element={<GalleryPage />} />
          </Route>
          <Route path="/*" element={<PublicLayout />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
