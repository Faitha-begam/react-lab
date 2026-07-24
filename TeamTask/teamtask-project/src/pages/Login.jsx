import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();

    if (username === "admin" && password === "1234") {
      navigate("/home");
    } else {
      alert("Invalid Username or Password");
    }

  };

  return (

    <div className="flex h-screen items-center justify-center bg-[#FDF6ED]">

      <form
        onSubmit={handleLogin}
        className="w-[350px] rounded-xl bg-white p-8 shadow-xl"
      >

        <h1 className="mb-6 text-center text-3xl font-bold text-[#66785F]">
          Login
        </h1>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4 w-full rounded-md border border-gray-300 p-3 outline-none focus:border-[#66785F]"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6 w-full rounded-md border border-gray-300 p-3 outline-none focus:border-[#66785F]"
        />

        <button
          type="submit"
          className="w-full rounded-md bg-[#66785F] py-3 text-white transition hover:bg-[#55684f]"
        >
          Login
        </button>

      </form>

    </div>

  );
};

export default Login;