import { Link, Navigate, useLocation, useOutlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function HomeLayout() {
  const location = useLocation();
  const outlet = useOutlet();
  const { user } = useAuth();

  const currentRoute = location.pathname;

  const accessibleRoute = ["/", "/about", "/features", "/pricing"].includes(
    currentRoute
  );

  if (user && !accessibleRoute) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen flex flex-col py-5">
      <ul className="w-[70vh] py-4 flex gap-6 justify-center rounded-xl bg-gray-50 mx-auto shadow-sm">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/features">Features</Link>
        <Link to="/pricing">Pricing</Link>
        <Link
          to="/login"
          className="ms-10 bg-blue-500 text-white py-1 px-3 rounded-md text-sm"
        >
          {user ? 'Dashboard' : 'Login'}
        </Link>
      </ul>

      {outlet}
    </div>
  );
}
