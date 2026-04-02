import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            JobPortal
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-6">

            <NavLink to="/">Home</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to="/companies">Companies</NavLink>

            {/* 👤 JOBSEEKER */}
            {user?.role === "jobseeker" && (
              <>
                <NavLink to="/applications">My Applications</NavLink>
              </>
            )}

            {/* 🏢 EMPLOYER */}
            {user?.role === "employer" && (
              <>
                <NavLink to="/post-job">Post Job</NavLink>
                <NavLink to="/my-jobs">My Jobs</NavLink>
              </>
            )}

            {/* 🛠 ADMIN */}
            {user?.role === "admin" && (
              <>
                <NavLink to="/admin">Dashboard</NavLink>
              </>
            )}

            {/* 🔐 AUTH */}
            {!user ? (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
              </>
            ) : (
              <div className="relative">
                {/* Profile Button */}
                <button
                  onClick={() => setDropdown(!dropdown)}
                  className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-full hover:bg-gray-200"
                >
                  <div className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center rounded-full">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium">{user.name}</span>
                </button>

                {/* DROPDOWN */}
                {dropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Profile
                    </Link>

                    <Link
                      to="/edit-profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Edit Profile
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">

            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/jobs" onClick={() => setIsOpen(false)}>Jobs</MobileNavLink>
            <MobileNavLink to="/companies" onClick={() => setIsOpen(false)}>Companies</MobileNavLink>

            {user?.role === "jobseeker" && (
              <MobileNavLink to="/applications" onClick={() => setIsOpen(false)}>
                My Applications
              </MobileNavLink>
            )}

            {user?.role === "employer" && (
              <>
                <MobileNavLink to="/post-job" onClick={() => setIsOpen(false)}>
                  Post Job
                </MobileNavLink>
                <MobileNavLink to="/my-jobs" onClick={() => setIsOpen(false)}>
                  My Jobs
                </MobileNavLink>
              </>
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
              <>
                <MobileNavLink to="/profile" onClick={() => setIsOpen(false)}>
                  Profile
                </MobileNavLink>

                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-red-500"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}

      </div>
    </nav>
  );
}

/* 🔹 NAV LINK */
function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-gray-700 hover:text-indigo-600 font-medium transition"
    >
      {children}
    </Link>
  );
}

/* 🔹 MOBILE LINK */
function MobileNavLink({ to, onClick, children }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-4 py-2 hover:bg-gray-100 rounded-lg"
    >
      {children}
    </Link>
  );
}

export default Navbar;