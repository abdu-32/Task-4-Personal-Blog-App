import { Link } from 'react-router-dom';

const BlogCard = ({ blog, variant = 'grid' }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  if (variant === 'featured') {
    return (
      <div className="relative h-96 rounded-lg overflow-hidden group cursor-pointer">
        <img 
          src={blog.image || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop'} 
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full mb-4">
              Featured
            </span>
            <h2 className="text-3xl font-bold text-white mb-3 leading-tight">
              {blog.title}
            </h2>
            <p className="text-white/90 text-lg mb-4 line-clamp-2">
              {blog.description}
            </p>
            <div className="flex items-center text-white/80 text-sm">
              <span>{blog.author}</span>
              <span className="mx-2">•</span>
              <span>{formatDate(blog.createdAt)}</span>
            </div>
          </div>
        </div>
        <Link to={`/blog/${blog.id}`} className="absolute inset-0" />
      </div>
    );
  }

  return (
    <div className="blog-card group cursor-pointer overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img 
          src={blog.image || `https://images.unsplash.com/photo-${1500 + parseInt(blog.id)}?w=400&h=250&fit=crop&q=80`} 
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {blog.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {blog.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs text-gray-500">
            <span className="font-medium">{blog.author}</span>
            <span className="mx-2">•</span>
            <span>{formatDate(blog.createdAt)}</span>
          </div>
        </div>
      </div>
      <Link to={`/blog/${blog.id}`} className="absolute inset-0" />
    </div>
  );
};

export default BlogCard;