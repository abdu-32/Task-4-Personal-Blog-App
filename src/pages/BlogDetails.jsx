import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAtomValue, useAtom } from 'jotai';
import { blogsAtom, bookmarksAtom, toggleBookmarkAtom } from '../atoms/blogAtoms';
import Navbar from '../components/Navbar';



const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogs = useAtomValue(blogsAtom);
  const bookmarks = useAtomValue(bookmarksAtom);
  const [, toggleBookmark] = useAtom(toggleBookmarkAtom);
  
  const blog = blogs.find(b => b.id === id);
  const isBookmarked = bookmarks.includes(id);

  if (!blog) {
    return (
      <div className="blog-background">
        <Navbar />
        <div className="blog-content">
          <div className="container mx-auto px-6 py-12 text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Blog not found</h1>
            <Link to="/" className="blog-button-primary px-6 py-2 rounded-md inline-block">
              Go back to home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleBookmark = () => {
    toggleBookmark(id);
  };

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="blog-background">
      <Navbar />
      
      <main className="blog-content">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Blog Header Card */}
            <div className="blog-card p-8 mb-8">
              {/* Author Info */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-gray-600">
                    {blog.author.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{blog.author}</h3>
                  <p className="text-sm text-gray-500">
                    Published on {formatDate(blog.createdAt)}
                    {blog.editedAt && (
                      <span> • Edited on {formatDate(blog.editedAt)}</span>
                    )}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-4">
                  <button
                    onClick={handleBookmark}
                    className={`p-2 rounded-full transition-colors ${
                      isBookmarked 
                        ? 'bg-yellow-100 text-yellow-600' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
                  >
                    <svg className="w-5 h-5" fill={isBookmarked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                  <button
                    onClick={handleEdit}
                    className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                    title="Edit post"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
                
                <Link 
                  to="/"
                  className="blog-button-primary px-6 py-2 rounded-md font-medium"
                >
                  Back to Home
                </Link>
              </div>

              {/* Blog Title */}
              <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                {blog.title}
              </h1>

              {/* Blog Image */}
              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src={blog.image || `https://images.unsplash.com/home.png-${1500 + parseInt(blog.id)}?w=800&h=400&fit=crop&q=80`}
                  alt={blog.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="prose prose-lg max-w-none">
                {blog.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};


export default BlogDetails;