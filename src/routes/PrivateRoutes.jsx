import * as React from "react";
import { Navigate } from "react-router-dom";


const Home = React.lazy(() => import('../pages/HomePage.jsx'))
const DetailProduct = React.lazy(() => import('../pages/Product/DetailProduct.jsx'))
const CartProduct = React.lazy(() => import('../pages/Product/CartProduct.jsx'))
const PaymentProduct = React.lazy(() => import('../pages/Product/PaymentProduct.jsx'))
const PaymentSuccess = React.lazy(() => import('../pages/Product/ProductSuccessfully.jsx'))

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
    path: '/cart',
    name: 'cart Product',
    key: 'cartProduct',
    element: <CartProduct />
  },
  {
    index: false,
    path: '/payment',
    name: 'payment Product',
    key: 'paymentProduct',
    element: <PaymentProduct />
  },
  {
    index: false,
    path: '/payment-success',
    name: 'payment Product',
    key: 'paymentProduct',
    element: <PaymentSuccess />
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