import { useParams, useNavigate } from 'react-router-dom';
import { useAtomValue, useAtom } from 'jotai';
import { blogsAtom, updateBlogAtom } from '../atoms/blogAtoms';
import Navbar from '../components/Navbar';
import BlogForm from '../components/BlogForm';

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogs = useAtomValue(blogsAtom);
  const [, updateBlog] = useAtom(updateBlogAtom);
  
  const blog = blogs.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="blog-background">
        <Navbar />
        <div className="blog-content">
          <div className="container mx-auto px-6 py-12 text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Blog not found</h1>
            <button 
              onClick={() => navigate('/')}
              className="blog-button-primary px-6 py-2 rounded-md"
            >
              Go back to home
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmit = (formData) => {
    updateBlog({
      id,
      updatedBlog: {
        title: formData.title,
        author: formData.author,
        description: formData.description,
        content: formData.content,
        profileLink: formData.profileLink
      }
    });
    
    navigate(`/blog/${id}`);
  };

  const handleCancel = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="blog-background">
      <Navbar />
      <BlogForm 
        initialData={blog}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        isEdit={true}
      />
    </div>
  );
};

export default EditBlog;