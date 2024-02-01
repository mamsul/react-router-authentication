import { useAuth } from "../hooks/useAuth";

const SettingsPage = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex min-h-screen justify-center items-center flex-col">
      <h1 className="text-3xl font-medium mb-20">Settings page</h1>
      <button
        onClick={handleLogout}
        className="w-[10rem] rounded-xl bg-blue-500 text-white font-medium py-3 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
      >
        Logout
      </button>
    </div>
  );
};

export default SettingsPage;
