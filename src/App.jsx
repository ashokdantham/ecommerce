import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {CardProvider} from './context/Cart'
import Navbar from './components/Navbar'
const Root = () => {
  return <CardProvider>
  <Navbar />
  <Outlet />;
  </CardProvider>
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
