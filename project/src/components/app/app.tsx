import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Blog from '../../pages/blog/blog';
import Favorites from '../../pages/favorites/favorites';
// import Home1 from '../../pages/home1/home1';
import Login from '../../pages/login/login';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Blog />}/>
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Blog} element={<Blog />} />
        <Route path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
