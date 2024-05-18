import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Cart from './pages/cart';

function App() {
  const pages = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/cart',
      element: <Cart />,
    },
  ]);

  return <RouterProvider router={pages} />;
}

export default App;
