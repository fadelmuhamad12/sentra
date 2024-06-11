import * as React from "react";

const Dashboard = React.lazy(() => import('../pages/Admin/dashboard'))

const ADMIN_ROUTES = [
  {
    index: false,
    path: '/',
    name: 'Dashboard',
    key: 'dashboard',
    element: <Dashboard />
  },
]

export default ADMIN_ROUTES