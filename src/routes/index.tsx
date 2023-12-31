import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import AllBooks from '../pages/AllBooks';
import Home from '../pages/Home';
import App from '../App';
import PrivateRoute from './PrivateRoute';
import SinglebookDetails from '../pages/SinglebookDetails';
import AddBooks from '../pages/AddBooks';
import EditBooks from '../pages/EditBooks';
import CreateBook from '../pages/CreateBook';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/allbooks',
        element:<PrivateRoute><AllBooks /></PrivateRoute>  ,
      },
       {
        path: '/book/:id',
        element: <SinglebookDetails />,
      },
       {
        path: '/editbook/:id',
        element:<PrivateRoute><EditBooks /></PrivateRoute> ,
      },
       {
        path: '/addbooks',
        element:<PrivateRoute><AddBooks /></PrivateRoute> ,
      },
       {
        path: '/createbook',
        element:<PrivateRoute><CreateBook/></PrivateRoute> ,
      }
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;