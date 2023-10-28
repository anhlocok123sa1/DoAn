import Home from '~/pages/Home';
import AboutUs from '~/pages/AboutUs';
import Cart from '~/pages/Cart';
import CheckOrder from '~/pages/CheckOrder';
import Login from '~/pages/Login';
import Register from '~/pages/Register';

//Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/aboutus', component: AboutUs },
    { path: '/checkorder', component: CheckOrder },
    { path: '/cart', component: Cart },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
];

//Private routes
const privateRoutes = [];

export { privateRoutes, publicRoutes };
