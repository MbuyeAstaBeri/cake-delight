import { Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { NewProducts } from "./components/NewProducts";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { NoMarch } from "./components/NoMatch";
import { Products } from "./components/Products";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { Recipes } from "./components/Recipes";
import { AuthProvider } from "./components/auth";
import { Login } from "./components/Login";
import { RequireAuth } from "./components/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="products" element={<Products />}>
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
        </Route>
        <Route
          path="recipes"
          element={
            <RequireAuth>
              <Recipes />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMarch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
