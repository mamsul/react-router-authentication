import { Link, Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function ProtectedLayout() {
  const outlet = useOutlet();
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen flex flex-col py-5">
      <ul className="w-[70vh] py-4 flex gap-5 justify-center rounded-xl bg-gray-50 mx-auto shadow-sm">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/settings">Settings</Link>
      </ul>

      {outlet}
    </div>
  );
}
