import * as React from "react";
import { Navigate } from "react-router-dom";


const Home = React.lazy(() => import('../pages/HomePage.jsx'))
const DetailProduct = React.lazy(() => import('../pages/Product/DetailProduct.jsx'))

const PRIVATE_ROUTES = [
  {
    index: false,
    path: '/',
    name: 'Home Page',
    key: 'homePage',
    element: <Home />
  },
  {
    index: false,
    path: '/product/:id',
    name: 'Detail Product',
    key: 'detailProduct',
    element: <DetailProduct />
  },
  {
    index: false,
    path: "*",
    name: "Not Found",
    key: "*",
    element: <Navigate to="/
    " />,
  },
]

export default PRIVATE_ROUTES