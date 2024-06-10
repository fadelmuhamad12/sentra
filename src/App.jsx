import PropTypes from 'prop-types';
import { Suspense, useEffect } from 'react';
import PUBLIC_ROUTES from './routes/PublicRoutes';
import Loading from './components/Loading/Loading';
import PRIVATE_ROUTES from './routes/PrivateRoutes';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from './components/Layout/MainLayout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { authAction } from './redux/actions/Auth/authAction';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authAction());
  }, [dispatch]);

  const { userData, authed } = useSelector((state) => state.authReducer);
  console.log(userData);
  // const user = useSelector((state) => state.authChecked)
  // console.log(user,'usr');

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

  if(!authed) {
    return (
      <>
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
          >
          </Route>
        )) }
      </Routes>
      </>
    )
  } else {
    return (
      <>
      <Routes>
        {PRIVATE_ROUTES.map((item) => (
          <Route
          key={item?.key}
          path={item?.path}
          element={
            <Suspense fallback={<Loading />}>
              <PrivateRoute authed={authed}>
                <MainLayout userData={userData}>{item?.element}</MainLayout>
              </PrivateRoute>
            </Suspense>
          }
          >
          </Route>
        ))}
      </Routes>
      </>
    )
  }
}

export default App;
