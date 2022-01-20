import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  const admin = user?.isAdmin;

  const Layout = () => {
    return (
      <>
        <Topbar />
        {admin ? (
          <div className="container">
            <Sidebar />
            <Outlet />
          </div>
        ) : (
          <Navigate to="/login" />
        )}
      </>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={admin ? <Navigate to="/" /> : <Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<UserList />} />
          <Route path="user/:userId" element={<User />} />
          <Route path="newUser" element={<NewUser />} />
          <Route path="products" element={<ProductList />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="newProduct" element={<NewProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
