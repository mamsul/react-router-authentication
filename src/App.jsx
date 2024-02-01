import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import HomeLayout from "./components/layouts/HomeLayout";
import ProtectedLayout from "./components/layouts/ProtectedLayout";
import { protectedRoutes, publicRoutes } from "./routes";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<HomeLayout />}>
          {publicRoutes.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </Route>
        <Route path="/dashboard" element={<ProtectedLayout />}>
          {protectedRoutes.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
