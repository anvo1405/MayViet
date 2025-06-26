import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { ROUTES } from './routes';
import PublicRoute from './PublicRoute';

export interface AppRoute {
  path: string;
  element: React.ComponentType;
  layout?: React.ComponentType<{ children: React.ReactNode }>;
  isProtected?: boolean;
}

function AppRoutes() {
  return (
    <Routes>
      {ROUTES.map(({ path, element: Component, layout: Layout, isProtected }: AppRoute) => {
        let content = <Component />;

        if (Layout) {
          content = <Layout>{content}</Layout>;
        }

        if (isProtected) {
          content = <PrivateRoute>{content}</PrivateRoute>;
        } else {
           content = <PublicRoute>{content}</PublicRoute>; 
        }

        return <Route key={path} path={path} element={content} />;
      })}
    </Routes>
  );
}

export default AppRoutes;
