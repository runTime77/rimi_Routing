import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Main from './Main';
import Products from './Products';
import ContactUs from './ContactUs';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/products",
          element: <Products></Products>,
        },
        {
          path: "/contactus",
          element: <ContactUs></ContactUs>
        },
      ],
    },


  ]);


  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;