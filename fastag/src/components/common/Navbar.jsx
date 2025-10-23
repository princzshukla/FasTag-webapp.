import { useState } from "react";
import {
  Wallet,
  Menu,
  X,
  LogOut,
  User,
  Sparkles,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

export default function Navbar({ onWalletClick, isLoggedIn, email, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    closeModal();
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowLoginModal(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 text-white sticky top-0 z-40 shadow-xl backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-300 animate-pulse" />
              <div className="text-3xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                Logiclead
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            {isLoggedIn && (
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center">
                  <User size={18} className="text-white" />
                </div>
                <span className="text-sm font-medium max-w-[150px] truncate">
                  {email}
                </span>
              </div>
            )}

            <button
              onClick={onWalletClick}
              className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105 group"
            >
              <Wallet
                size={20}
                className="group-hover:rotate-12 transition-transform"
              />
              <span className="font-medium">Wallet</span>
            </button>

            {isLoggedIn && (
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-5 py-2.5 bg-red-500/20 hover:bg-red-500/30 backdrop-blur-md rounded-full transition-all duration-300 border border-red-400/30 hover:border-red-400/50 hover:scale-105"
              >
                <LogOut size={18} />
                <span className="font-medium">Logout</span>
              </button>
            )}

            {!isLoggedIn && (
              <button
                onClick={() => setShowLoginModal(true)}
                className="flex items-center gap-2 px-6 py-2.5 bg-white text-teal-700 hover:bg-cyan-50 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
              >
                <User size={18} />
                Login
              </button>
            )}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2.5 hover:bg-white/20 rounded-xl transition-all duration-300 border border-white/20"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
            />
            <div className="fixed top-20 right-4 bg-white text-gray-800 shadow-2xl rounded-2xl w-80 z-50 overflow-hidden">
              {!isLoggedIn ? (
                <>
                  <button
                    onClick={() => {
                      setShowLoginModal(true);
                      setMenuOpen(false);
                    }}
                    className="w-full text-left p-5 hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 flex items-center gap-4 border-b transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform">
                      <User size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        Login / Signup
                      </h3>
                      <p className="text-sm text-gray-600">
                        Login to avail best deals
                      </p>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      onWalletClick();
                      setMenuOpen(false);
                    }}
                    className="w-full text-left p-5 hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 flex items-center gap-4 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Wallet size={24} className="text-white" />
                    </div>
                    <span className="font-bold text-lg">My Wallet</span>
                  </button>
                </>
              ) : (
                <>
                  <div className="p-5 bg-gradient-to-r from-teal-50 to-cyan-50 border-b">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center">
                        <User size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 uppercase tracking-wide">
                          Logged in as
                        </p>
                        <p className="font-bold text-gray-800 text-sm">
                          {email}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      onWalletClick();
                      setMenuOpen(false);
                    }}
                    className="w-full text-left p-5 hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 flex items-center gap-4 border-b transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Wallet size={24} className="text-white" />
                    </div>
                    <span className="font-bold text-lg">My Wallet</span>
                  </button>
                  <button
                    onClick={() => {
                      onLogout();
                      setMenuOpen(false);
                    }}
                    className="w-full text-left p-5 hover:bg-red-50 flex items-center gap-4 text-red-600 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 group-hover:scale-110 transition-all">
                      <LogOut size={24} />
                    </div>
                    <span className="font-bold text-lg">Logout</span>
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </nav>

      {showLoginModal && (
        <>
          <div
            className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
              isClosing ? "opacity-0" : "opacity-100"
            }`}
            onClick={closeModal}
          >
            <div
              className={`bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all duration-300 ${
                isClosing
                  ? "scale-95 opacity-0 -translate-y-4"
                  : "scale-100 opacity-100 translate-y-0"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-6 text-white relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-all"
                >
                  <X size={20} />
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                    <User size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">
                      {isSignup ? "Create Account" : "Welcome Back"}
                    </h2>
                    <p className="text-cyan-100 text-sm">
                      {isSignup
                        ? "Sign up to get started"
                        : "Login to continue"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="w-full pl-11 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-all"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {isSignup && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            confirmPassword: e.target.value,
                          })
                        }
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-all"
                        placeholder="Confirm your password"
                      />
                    </div>
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 mt-6"
                >
                  {isSignup ? "Create Account" : "Login"}
                </button>

                <div className="text-center pt-4 border-t">
                  <p className="text-gray-600">
                    {isSignup
                      ? "Already have an account?"
                      : "Don't have an account?"}{" "}
                    <button
                      type="button"
                      onClick={() => setIsSignup(!isSignup)}
                      className="text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                    >
                      {isSignup ? "Login" : "Sign Up"}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
