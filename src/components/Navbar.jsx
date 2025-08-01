import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Saved', path: '/bookmarks' }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="blog-content">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            Blog
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-white text-gray-900 font-medium'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Post a Blog Button */}
            <Link
              to="/create"
              className="blog-button-primary px-6 py-2 rounded-full font-medium"
            >
              Post a Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;