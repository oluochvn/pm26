import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // simple check (replace with real auth later)
    if (password === "admin123") {
      setIsLoggedIn(true);
    } else {
      alert("Wrong password");
    }
  };

  if (isLoggedIn) {
    return (
      <div className="bg-black min-h-screen text-amber-300 flex items-center justify-center text-2xl">
        <h1>Welcome to Dashboard 🚀</h1>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-amber-300 flex flex-col items-center justify-center gap-4">
      
      <h1 className="text-3xl font-bold">Login</h1>

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="px-4 py-2 rounded bg-gray-800 text-white outline-none"
      />

      <button
        onClick={handleLogin}
        className="px-6 py-2 bg-amber-400 text-black rounded hover:bg-amber-300"
      >
        Login
      </button>

    </div>
  );
}

export default App;