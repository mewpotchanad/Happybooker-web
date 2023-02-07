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


const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />
    }, {
        path: '/register',
        element: <RegisterPage />
    }, {
        path: '/profile',
        element: <ProfilePage />
    }, {
        path: '/account',
        element: <AccountPage />
    }, {
        path: '/',
        element: <Navbar />,
        children: [{ path: '/', element: <HomePage /> },
        {
            path: '/shelf',
            element: <ShelfPage />
        }, {
            path: '/ebook',
            element: <EbookPage />
        }, {
            path: '/subscription',
            element: <SubscriptionPage />
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