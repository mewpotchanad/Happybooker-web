import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ShelfPage from '../pages/ShelfPage';
import EbookPage from '../pages/EbookPage';
import ProfilePage from '../pages/ProfilePage';
import AccountPage from '../pages/AccountPage';
import SubscriptionPage from '../pages/SubscriptionPage';
import RegisterPage from '../pages/RegisterPage';
import NovelPage from '../pages/NovelPage';
import CartoonPage from '../pages/CartoonPage';
import SelfhelpPage from '../pages/SelfhelpPage';
import Navbar from '../layouts/Navbar';
import RedirectiIfAuthenticate from '../features/auth/RedirectiIfAuthenticate';
import ProtectedRoute from '../features/auth/ProtectedRoute';


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
            <ProtectedRoute>
                <RegisterPage />
            </ProtectedRoute>
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
        path: '/subscription',
        element: (
            <ProtectedRoute>
                <SubscriptionPage />
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
            },
            {
                path: '/shelf',
                element: <ShelfPage />
            }, {
                path: '/ebook',
                element: <EbookPage />
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