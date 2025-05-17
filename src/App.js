import React from 'react';
import './App.css';
import { 
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ExercisesPage from './pages/ExercisesPage';
import ProgramsPage from './pages/ProgramsPage';
import Nutrition from './components/Nutrition';
import CommunityPage from './pages/CommunityPage';
import { AuthProvider } from './context/AuthContext';

// Create router with future flags
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="exercises" element={<ExercisesPage />} />
      <Route path="programs" element={<ProgramsPage />} />
      <Route path="nutrition" element={<Nutrition />} />
      <Route path="community" element={<CommunityPage />} />
    </Route>
  ),
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  }
);

// Root layout component
function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;