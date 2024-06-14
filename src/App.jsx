import PropTypes from 'prop-types';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import PUBLIC_ROUTES from './routes/PublicRoutes';
import PRIVATE_ROUTES from './routes/PrivateRoutes';
// import ADMIN_ROUTES from './routes/AdminRoutes';
import Loading from './components/Loading/Loading';
import MainLayout from './components/Layout/MainLayout';
import { authAction } from './redux/actions/Auth/authAction';
import { admin } from './redux/actions/Auth/AuthAdmin';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authAction());
    dispatch(admin());
  }, [dispatch]);

  const { userData, authed } = useSelector((state) => state.authReducer);
  // const { data, authed } = useSelector((state) => state.admin);

  const PrivateRoute = ({ authed, children }) => {
    if (!authed) {
      return <Navigate to='/' />;
    }
    return children;
  };

  PrivateRoute.propTypes = {
    authed: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired,
  };

  const AdminRoutes = ({ authed, children }) => {
    if (!authed) {
      return <Navigate to='/' />;
    }
    return children;
  };

  AdminRoutes.propTypes = {
    authed: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired,
  };

  if (!authed) {
    return (
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route
            key={item?.key}
            path={item?.path}
            element={
              <Suspense fallback={<Loading />}>
                {item?.element}
              </Suspense>
            }
          />
        ))}
      </Routes>
    );
  // } else if (data?.role === "admin" && authed === true) {
  //   return (
  //     <Routes>
  //       {ADMIN_ROUTES.map((item) => (
  //         <Route
  //           key={item?.key}
  //           path={item?.path}
  //           element={
  //             <Suspense fallback={<Loading />}>
  //               {item?.element}
  //             </Suspense>
  //           }
  //         />
  //       ))}
  //     </Routes>
  //   );
  } else {
    return (
      <Routes>
        {PRIVATE_ROUTES.map((item) => (
          <Route
            key={item?.key}
            path={item?.path}
            element={
              <Suspense fallback={<Loading />}>
                <PrivateRoute authed={authed}>
                  <MainLayout userData={userData}>
                    {item?.element}
                  </MainLayout>
                </PrivateRoute>
              </Suspense>
            }
          />
        ))}
      </Routes>
    );
  }
}

export default App;
