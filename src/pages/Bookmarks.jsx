import { useAtomValue } from 'jotai';
import { bookmarkedBlogsAtom } from '../atoms/blogAtoms';
import Navbar from '../components/Navbar';
import BlogCard from '../components/BlogCard';

const Bookmarks = () => {
  const bookmarkedBlogs = useAtomValue(bookmarkedBlogsAtom);

  return (
    <div className="blog-background">
      <Navbar />
      
      <main className="blog-content">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8">Saved Articles</h1>
            
            {bookmarkedBlogs.length === 0 ? (
              <div className="blog-card p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">No bookmarks yet</h2>
                <p className="text-gray-600">Start exploring and bookmark articles you'd like to read later.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {bookmarkedBlogs.map((blog) => {
                  const formatDate = (dateString) => {
                    const date = new Date(dateString);
                    return date.toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    });
                  };

                  return (
                    <div key={blog.id} className="blog-card p-6 flex items-start space-x-6 relative group">
                      {/* Author Avatar */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-lg font-bold text-gray-600">
                            {blog.author.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="text-sm text-gray-600 mb-1">{blog.author}</p>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                              {blog.title}
                            </h3>
                          </div>
                          
                          {/* Bookmark Icon */}
                          <div className="flex-shrink-0 ml-4">
                            <div className="p-2 text-yellow-600">
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Blog Image */}
                        <div className="mb-4">
                          <img 
                            src={blog.image || `https://images.unsplash.com/photo-${1500 + parseInt(blog.id)}?w=600&h=300&fit=crop&q=80`}
                            alt={blog.title}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 mb-4 line-clamp-2">
                          {blog.description}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {formatDate(blog.createdAt)}
                          </span>
                          <a 
                            href={`/blog/${blog.id}`}
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                          >
                            Read more
                          </a>
                        </div>
                      </div>

                      {/* Click overlay */}
                      <a 
                        href={`/blog/${blog.id}`}
                        className="absolute inset-0"
                        aria-label={`Read ${blog.title}`}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Bookmarks;