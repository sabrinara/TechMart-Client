
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import ErrorPage from '../layout/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddProduct from '../pages/AddProduct';
import MyCart from '../pages/MyCart';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () =>  fetch('/data.json')
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: "/register",
                element:<Register></Register>
            },
            {
                path:"/addproduct",
                element:<AddProduct></AddProduct>
            },
            {
                path:"/mycart",
                element:<MyCart></MyCart>
            }
        ]
    },
   
]);

export default routes;