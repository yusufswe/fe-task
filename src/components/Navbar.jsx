import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { theme, setTheme } = useTheme();
  const dropdownRef = useRef(null);
  const [isDropDownOpen, setDropDownOpen] = useState(false);

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropDownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    user?.isAuthenticated && (
      <nav className="bg-slate-900">
        <div className="flex items-center justify-between px-12 py-6 sm:px-6">
          <div>
            <Link to="/" className="font-bold text-white text-2xl">
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
            {user?.isAuthenticated && (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropDownOpen(!isDropDownOpen)}
                  className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <span className="text-white font-bold text-lg">{user.user?.username}</span>
                  <ChevronDown className="w-4 h-4 text-white" />
                </button>

                {isDropDownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setDropDownOpen(false)}
                    >
                      Edit Profile
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setDropDownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    )
  );
}
