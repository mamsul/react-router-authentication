import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Here you would usually send a request to your backend to authenticate the user
    // For the sake of this example, we're using a mock authentication
    if (username === "user" && password === "password") {
      // Replace with actual authentication logic
      await login({ username });
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleLogin} className="flex flex-col gap-5 w-[30rem] bg-gray-50 shadow-sm p-10 rounded-xl">
        <div>
          <label htmlFor="username" className="text-gray-600 mb-2 block">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            className="h-14 w-full rounded-xl border border-gray-300 bg-transparent bg-white px-4 text-sm outline-none transition-all duration-300 focus:border-gray-700 sm:text-base lg:h-12"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="text-gray-600 mb-2 block">Password:</label>
          <input
            id="password"
            type="password"
            className="h-14 w-full rounded-xl border border-gray-300 bg-transparent bg-white px-4 text-sm outline-none transition-all duration-300 focus:border-gray-700 sm:text-base lg:h-12"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-blue-500 text-white font-medium"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
