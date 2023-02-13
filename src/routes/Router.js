import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ShelfPage from '../pages/ShelfPage';
import EbookPage from '../pages/EbookPage';
import ProfilePage from '../pages/ProfilePage';
import AccountPage from '../pages/AccountPage';
import CategoryPage from '../pages/CategoryPage';
import RegisterPage from '../pages/RegisterPage';
import NovelPage from '../pages/NovelPage';
import CartoonPage from '../pages/CartoonPage';
import SelfhelpPage from '../pages/SelfhelpPage';
import Navbar from '../layouts/Navbar';
import RedirectiIfAuthenticate from '../features/auth/RedirectiIfAuthenticate';
import ProtectedRoute from '../features/auth/ProtectedRoute';
import EditProfilePage from '../pages/EditProfilePage'


const router = createBrowserRouter([
    {
        path: '/login',
        element: (
            <RedirectiIfAuthenticate>
                <LoginPage />
            </RedirectiIfAuthenticate>
        )
    }, {
        path: '/register',
        element: (
                <RegisterPage />
        )
    }, {
        path: '/profile',
        element: (
            <ProtectedRoute>
                <ProfilePage />
            </ProtectedRoute>
        )
    }, {
        path: '/account',
        element: (
            <ProtectedRoute>
                <AccountPage />
            </ProtectedRoute>
        )
    }, {
        path: '/category',
        element: (
            <ProtectedRoute>
                <CategoryPage />
            </ProtectedRoute>
        )
    }, {
        path: '/shelf',
        element: (
            <ProtectedRoute>
                <ShelfPage />
            </ProtectedRoute>
        )
    }, {
        path: '/ebook',
        element: (
            <ProtectedRoute>
                <EbookPage />
            </ProtectedRoute>
        )
    }, {
        path: '/editprofile',
        element: (
            <ProtectedRoute>
                <EditProfilePage />
            </ProtectedRoute>
        )
    },
    
    
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <Navbar />
            </ProtectedRoute>
        ),
        children: [
            {
                path: '/',
                element: <HomePage />
            }, {
                path: '/novel',
                element: <NovelPage />
            }, {
                path: '/cartoon',
                element: <CartoonPage />
            }, {
                path: '/selfhelp',
                element: <SelfhelpPage />
            }
        ]
    }


])

export default function Router() {
    return <RouterProvider router={router} />
}