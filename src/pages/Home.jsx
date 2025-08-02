import { useAtomValue } from "jotai";
import { featuredBlogAtom, recentBlogsAtom } from "../atoms/blogAtoms";
import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";

const Home = () => {
  const featuredBlog = useAtomValue(featuredBlogAtom);
  const recentBlogs = useAtomValue(recentBlogsAtom);


  // Define handleShowMore here
  const handleShowMore = () => {
    // Your logic to load or display more blogs
    // For example: set a state to increase the number of blogs shown
    alert('Show more clicked!');
  };

  return (
    <div className="blog-background">
      <Navbar />

      <main className="blog-content">
        <div className="container mx-auto px-6 py-8">
          {/* Featured Blog */}
          {featuredBlog && (
            <div className="mb-12">
              <BlogCard blog={featuredBlog} variant="featured" />
            </div>
          )}

          {/* Recent Blog Posts */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Recent Blog Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentBlogs.map((blog) => (
                <div key={blog.id} className="relative">
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
          </section>

          {/* Show More Button */}
          {recentBlogs.length > 0 && (
            <div className="text-center mt-12">
              <button
                className="blog-button-primary px-8 py-3 rounded-md font-medium"
                onClick={handleShowMore}
              >
                Show more
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
