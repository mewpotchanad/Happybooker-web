import {createBrowserRouter, RouterProvider} from 'react-router-dom';
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


const router = createBrowserRouter([
    {
    path: '/login',
    element: <LoginPage />
}, {
    path: '/',
    element: <HomePage />
}, {
    path: '/shelf',
    element: <ShelfPage />
}, {
    path: '/ebook',
    element: <EbookPage />
}, {
    path: '/profile',
    element: <ProfilePage />
}, {
    path: '/account',
    element: <AccountPage />
}, {
    path: '/subscription',
    element: <SubscriptionPage />
}, {
    path: '/register',
    element: <RegisterPage />
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


])

export default function Router() {
    return <RouterProvider router={router} />
}