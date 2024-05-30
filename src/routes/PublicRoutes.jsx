import * as React from "react";
import { Navigate } from "react-router-dom";


const Login = React.lazy(() => import('../pages/LoginPage.jsx'))
const Home = React.lazy(() => import('../pages/HomePage.jsx'))
const SignUp = React.lazy(() => import('../pages/SignUpPage.jsx'))
const DetailProduct = React.lazy(() => import('../pages/Product/DetailProduct.jsx'))

const PUBLIC_ROUTES = [
  {
    index: false,
    path: '/',
    name: 'Sign In',
    key: 'signIn',
    element: <Login />
  },
  {
    index: false,
    path: '/home',
    name: 'Home Page',
    key: 'homePage',
    element: <Home />
  },
  {
    index: false,
    path: '/sign-up',
    name: 'Sign Up',
    key: 'signUp',
    element: <SignUp />
  },
  {
    index: false,
    path: '/product/:id',
    name: 'Detail Product',
    key: 'detailProduct',
    element: <DetailProduct />
  }
]

export default PUBLIC_ROUTES