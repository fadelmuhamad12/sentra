import { PublicRoutes } from './routes'
import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import Loading from './components/Loading/Loading'

function App() {

  return (
    <Routes>
      {PublicRoutes.map((item) => (
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
      ))}
    </Routes>
  )
}

export default App
