import * as React from "react";
import { Navigate } from "react-router-dom";


const Login = React.lazy(() => import('../pages/LoginPage.jsx'))
const SignUp = React.lazy(() => import('../pages/SignUpPage.jsx'))

const PUBLIC_ROUTES = [
  {
    index: false,
    path: '/',
    name: 'Sign In',
    key: '',
    element: <Login />
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
    path: "*",
    name: "Not Found",
    key: "*",
    element: <Navigate to="/" />,
  },
]

export default PUBLIC_ROUTES