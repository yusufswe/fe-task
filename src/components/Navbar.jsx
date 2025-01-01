import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();

  if (!user?.isAuthenticated) {
    return null;
  }

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="bg-slate-900">
      <div className="flex items-center justify-between p-4">
        <div>
          <Link to="/" className="font-bold text-white text-3xl">
            Dashboard
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleToggle}
            className={`flex items-center space-x-2 p-2 rounded-lg ${
              theme === "light" ? "bg-slate-600 text-slate-100" : "bg-gray-800 text-slate-100"
            }`}
          >
            {theme === "light" ? (
              <span className="flex items-center space-x-1">
                <Sun />
                <span>Light</span>
              </span>
            ) : (
              <span className="flex items-center space-x-1">
                <Moon />
                <span>Dark</span>
              </span>
            )}
          </button>
          <div>
            <Link to="/profile" className="text-white font-bold text-xl">
              Administrator
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
