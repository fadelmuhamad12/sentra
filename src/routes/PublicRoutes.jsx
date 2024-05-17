import * as React from "react";
import { Navigate } from "react-router-dom";


const Login = React.lazy(() => import('../pages/LoginPage.jsx'))
const Home = React.lazy(() => import('../pages/HomePage.jsx'))

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
  }
]

export default PUBLIC_ROUTES