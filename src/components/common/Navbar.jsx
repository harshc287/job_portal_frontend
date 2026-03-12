import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            JobPortal
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to="/companies">Companies</NavLink>
            {user && <NavLink to="/profile">Profile</NavLink>}
            {user?.role === "employer" && (
              <NavLink to="/post-job">Post Job</NavLink>
            )}
            {user?.role === "admin" && (
              <NavLink to="/admin">Admin</NavLink>
            )}
            {!user ? (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
              </>
            ) : (
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/jobs" onClick={() => setIsOpen(false)}>
              Jobs
            </MobileNavLink>
            <MobileNavLink to="/companies" onClick={() => setIsOpen(false)}>
              Companies
            </MobileNavLink>
            {user && (
              <MobileNavLink to="/profile" onClick={() => setIsOpen(false)}>
                Profile
              </MobileNavLink>
            )}
            {user?.role === "employer" && (
              <MobileNavLink to="/post-job" onClick={() => setIsOpen(false)}>
                Post Job
              </MobileNavLink>
            )}
            {user?.role === "admin" && (
              <MobileNavLink to="/admin" onClick={() => setIsOpen(false)}>
                Admin
              </MobileNavLink>
            )}
            {!user ? (
              <>
                <MobileNavLink to="/login" onClick={() => setIsOpen(false)}>
                  Login
                </MobileNavLink>
                <MobileNavLink to="/register" onClick={() => setIsOpen(false)}>
                  Register
                </MobileNavLink>
              </>
            ) : (
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

// Helper components for consistent link styling
function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-gray-700 hover:text-indigo-600 transition duration-200 font-medium"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, onClick, children }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
    >
      {children}
    </Link>
  );
}

export default Navbar;