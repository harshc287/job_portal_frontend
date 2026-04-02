import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const dropdownRef = useRef();
  const navigate = useNavigate();

  // ✅ CLOSE DROPDOWN ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

            {/* JOBSEEKER */}
            {user?.role === "jobseeker" && (
              <NavLink to="/applications">Applications</NavLink>
            )}

            {/* EMPLOYER */}
            {user?.role === "employer" && (
              <>
                <NavLink to="/post-job">Post Job</NavLink>
                <NavLink to="/my-jobs">My Jobs</NavLink>
                <NavLink to="/create-company">Create Company</NavLink>
                <NavLink to="/my-companies">My Companies</NavLink>
              </>
            )}

            {/* ADMIN */}
            {user?.role === "admin" && (
              <NavLink to="/admin">Admin</NavLink>
            )}

            {/* AUTH */}
            {!user ? (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
              </>
            ) : (
              <div className="relative" ref={dropdownRef}>

                {/* PROFILE BUTTON */}
                <button
                  onClick={() => setDropdown(prev => !prev)}
                  className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full hover:bg-gray-200"
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
                      onClick={() => setDropdown(false)}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Profile
                    </Link>

                    <Link
                      to="/edit-profile"
                      onClick={() => setDropdown(false)}
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
            className="md:hidden text-xl"
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

            {user?.role === "employer" && (
              <>
                <MobileNavLink to="/post-job" onClick={() => setIsOpen(false)}>Post Job</MobileNavLink>
                <MobileNavLink to="/my-jobs" onClick={() => setIsOpen(false)}>My Jobs</MobileNavLink>
                <MobileNavLink to="/my-companies" onClick={() => setIsOpen(false)}>My Companies</MobileNavLink>
              </>
            )}

            {!user ? (
              <>
                <MobileNavLink to="/login" onClick={() => setIsOpen(false)}>Login</MobileNavLink>
                <MobileNavLink to="/register" onClick={() => setIsOpen(false)}>Register</MobileNavLink>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-red-500"
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

/* NAV LINK */
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

/* MOBILE LINK */
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